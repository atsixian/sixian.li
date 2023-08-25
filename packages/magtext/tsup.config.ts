import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  minify: !options.watch,
  clean: true,
  external: ["react", "framer-motion"],
  ...options,
}));