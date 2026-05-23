/**
 * Cloudflare Workers Builds entrypoint for TanStack Start + @cloudflare/vite-plugin.
 * Runs vite build first (creates dist/ + .wrangler/deploy/config.json), then wrangler deploy.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function run(cmd, args) {
  return spawnSync(cmd, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}

const useBun = existsSync(join(root, "bun.lock"));

const build = useBun ? run("bun", ["run", "build"]) : run("npm", ["run", "build"]);
if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const wranglerJs = join(root, "node_modules", "wrangler", "bin", "wrangler.js");
const deploy = existsSync(wranglerJs)
  ? run(process.execPath, [wranglerJs, "deploy"])
  : useBun
    ? run("bunx", ["wrangler", "deploy"])
    : run("npx", ["wrangler", "deploy"]);

process.exit(deploy.status ?? 1);
