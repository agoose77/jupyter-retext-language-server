// Your bundler file
import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

await esbuild.build({
  entryPoints: ["js/server.mjs"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "jupyter_retext_language_server/dist/server.mjs",
  plugins: [nodeExternalsPlugin()],
});

await esbuild.build({
  entryPoints: ["js/retext-spell.mjs"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "jupyter_retext_language_server/dist/retext-spell.mjs",
  plugins: [nodeExternalsPlugin()],
});
