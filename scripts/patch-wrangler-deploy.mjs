import { chmodSync, copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const wranglerBin = join(root, "node_modules", "wrangler", "bin", "wrangler.js");
const wranglerOrig = join(root, "node_modules", "wrangler", "bin", "wrangler-original.js");
const marker = "ARGON_PATCHED_WRANGLER_DEPLOY";

if (!existsSync(wranglerBin)) {
  process.exit(0);
}

const current = readFileSync(wranglerBin, "utf8");
if (current.includes(marker)) {
  process.exit(0);
}

if (!existsSync(wranglerOrig)) {
  copyFileSync(wranglerBin, wranglerOrig);
}

const launcher = `#!/usr/bin/env node
// ${marker}
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const args = process.argv.slice(2);

function run(cmd, cmdArgs) {
  return spawnSync(cmd, cmdArgs, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}

if (args[0] === "deploy") {
  const build = existsSync(join(root, "bun.lock"))
    ? run("bun", ["run", "build"])
    : run("npm", ["run", "build"]);
  if (build.status !== 0) {
    process.exit(build.status ?? 1);
  }
}

const orig = join(dirname(fileURLToPath(import.meta.url)), "wrangler-original.js");
const wrangler = spawnSync(process.execPath, [orig, ...args], { cwd: root, stdio: "inherit" });
process.exit(wrangler.status ?? 1);
`;

writeFileSync(wranglerBin, launcher);
chmodSync(wranglerBin, 0o755);
