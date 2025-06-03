import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["lib"],
      exclude: ["lib/components/**/*.stories.ts"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "@emotion/react",
        "@emotion/styled",
      ],
    },
  },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "@emotion/react",
  },
});
