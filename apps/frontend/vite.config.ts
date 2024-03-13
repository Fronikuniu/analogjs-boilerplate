/// <reference types="vitest" />

import analog from "@analogjs/platform";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import nitro from "@analogjs/vite-plugin-nitro";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: "src/public",
    resolve: {
      mainFields: ["module"],
    },
    build: {
      outDir: "../../dist/apps/frontend/client",
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ["es2020"],
    },
    plugins: [analog(), nxViteTsPaths(), splitVendorChunkPlugin(), nitro()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
      cache: {
        dir: `../../node_modules/.vitest`,
      },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
