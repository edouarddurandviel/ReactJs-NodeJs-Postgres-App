const { build } = require("esbuild");
const { execSync } = require("child_process");

const isProd = process.env.NODE_ENV === "Production";

// First: type-check using tsc
try {
  execSync("tsc --noEmit", { stdio: "inherit" });
} catch {
  console.error("TypeScript type-checking failed.");
  process.exit(1);
}

// Then: bundle with esbuild
build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "node",
  target: "node24",
  outfile: "dist/index.js",
  sourcemap: !isProd,
  minify: isProd,
  external: ["express"],
  define: {
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
  }
}).catch(() => process.exit(1));
