import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const here = (p) => fileURLToPath(new URL(p, import.meta.url));

// The design system in ../project is the single source of truth: components,
// tokens, fonts and images are imported from there, not copied.
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@ds": here("../project"),
      // project/components import "react" but have no node_modules of their own.
      react: here("node_modules/react"),
      "react-dom": here("node_modules/react-dom"),
    },
  },
  server: { fs: { allow: [here("..")] } },
});
