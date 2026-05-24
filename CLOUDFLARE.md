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
