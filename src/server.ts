import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { DownloadCounter } from "./download-counter-do";
import { notifyDiscordDownload } from "./lib/discord-download-notify";
import { getDownloadCount, recordDownload } from "./lib/download-stats";
import { renderErrorPage } from "./lib/error-page";
import { DOWNLOAD_URL } from "./lib/site";

export { DownloadCounter };

interface Env {
  DOWNLOAD_COUNTER?: DurableObjectNamespace;
  DISCORD_DOWNLOAD_WEBHOOK_URL?: string;
}

type WorkerContext = { waitUntil(promise: Promise<unknown>): void };

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

async function handleDownloadRoutes(
  request: Request,
  env: Env,
  ctx: unknown,
): Promise<Response | null> {
  const url = new URL(request.url);

  if (url.pathname === "/api/downloads" && request.method === "GET") {
    const count = await getDownloadCount(env.DOWNLOAD_COUNTER);
    return Response.json(
      { count },
      {
        headers: {
          "cache-control": "no-store",
          "access-control-allow-origin": "*",
        },
      },
    );
  }

  if (url.pathname === "/download" && request.method === "GET") {
    const count = await recordDownload(env.DOWNLOAD_COUNTER);
    const notify = notifyDiscordDownload(env.DISCORD_DOWNLOAD_WEBHOOK_URL, count, request);
    if (ctx && typeof (ctx as WorkerContext).waitUntil === "function") {
      (ctx as WorkerContext).waitUntil(notify);
    } else {
      void notify;
    }
    return Response.redirect(DOWNLOAD_URL, 302);
  }

  return null;
}

export default {
  async fetch(request: Request, env: Env, ctx: unknown) {
    try {
      const downloadResponse = await handleDownloadRoutes(request, env, ctx);
      if (downloadResponse) return downloadResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
