# Cloudflare Workers Builds

This project uses **TanStack Start** with **`@cloudflare/vite-plugin`**. Wrangler must deploy the **Vite build output**, not `src/server.ts` directly.

## Required dashboard settings

In **Workers & Pages → your project → Settings → Builds**:

| Field | Value |
|--------|--------|
| **Build command** | `bun run build` |
| **Deploy command** | `bunx wrangler deploy` |

**Or** use a single deploy step (leave Build command empty):

| Field | Value |
|--------|--------|
| **Deploy command** | `bun run deploy` |

## Do not use

```bash
npx wrangler deploy
```

alone. That skips `vite build`, so Wrangler tries to bundle `src/server.ts` and fails on TanStack virtual imports (`#tanstack-router-entry`, etc.).

## Local deploy

```bash
bun run deploy
```

## Download counter (persistent)

Download counts use a **Durable Object** (`DownloadCounter`), not in-memory storage. The count survives deploys and worker restarts automatically — no manual KV namespace setup.

Bindings and migrations are already in `wrangler.jsonc`. After the first deploy with this config, Cloudflare provisions the DO class; counts only reset if you delete the worker or remove the migration history.

To test locally with persistence:

```bash
bunx wrangler dev
```

Plain `vite dev` without Wrangler will not bind `DOWNLOAD_COUNTER`; the site still works, but `/api/downloads` returns `0` until deployed.

## Discord download notifications

Each hit on `/download` can post to a Discord webhook (non-blocking, via `waitUntil`).

**Production** — set the webhook URL as a Worker secret (do not commit it):

```bash
bunx wrangler secret put DISCORD_DOWNLOAD_WEBHOOK_URL
```

Paste your full Discord webhook URL when prompted, then redeploy.

**Local** — copy `.dev.vars.example` to `.dev.vars` and set `DISCORD_DOWNLOAD_WEBHOOK_URL`, then run `bunx wrangler dev`.

## GitHub Actions (recommended)

Push to `main` triggers `.github/workflows/deploy.yml` when these **repository secrets** are set:

| Secret | Where to get it |
|--------|-----------------|
| `CLOUDFLARE_API_TOKEN` | [Cloudflare API tokens](https://dash.cloudflare.com/profile/api-tokens) → **Edit Cloudflare Workers** template |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers → right sidebar **Account ID** |
| `DISCORD_DOWNLOAD_WEBHOOK_URL` | Your Discord channel webhook URL |

One-shot setup from this machine (opens browser for GitHub login):

```powershell
powershell -ExecutionPolicy Bypass -File scripts/setup-and-push.ps1
```

The script reads `DISCORD_DOWNLOAD_WEBHOOK_URL` from `.dev.vars`, sets GitHub secrets, and pushes `main`.
