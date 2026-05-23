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
