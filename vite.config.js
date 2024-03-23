import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // eslint-disable-next-line no-undef
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "./src") },
      { find: "components", replacement: path.resolve(__dirname, "./src/apps/components") },
      { find: "templates", replacement: path.resolve(__dirname, "./src/apps/templates") },
    ],
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
