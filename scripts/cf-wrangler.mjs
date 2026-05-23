import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);

function run(cmd, cmdArgs) {
  return spawnSync(cmd, cmdArgs, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}

if (args[0] === "deploy") {
  let build = existsSync(join(root, "bun.lock"))
    ? run("bun", ["run", "build"])
    : { status: null, error: { code: "ENOENT" } };

  if (build.status !== 0) {
    build = run("npm", ["run", "build"]);
  }

  if (build.status !== 0) {
    process.exit(build.status ?? 1);
  }
}

const wranglerOrig = join(root, "node_modules", "wrangler", "bin", "wrangler-original.js");
const wranglerJs = existsSync(wranglerOrig)
  ? wranglerOrig
  : join(root, "node_modules", "wrangler", "bin", "wrangler.js");
if (!existsSync(wranglerJs)) {
  console.error(
    "wrangler is not installed. Run `bun install` and use `bun run deploy`, or set the Cloudflare deploy command to `bun run deploy`.",
  );
  process.exit(1);
}

const wrangler = spawnSync(process.execPath, [wranglerJs, ...args], {
  cwd: root,
  stdio: "inherit",
});

process.exit(wrangler.status ?? 1);
