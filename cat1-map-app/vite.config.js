import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Optional: to avoid issues with path separators on Windows
      '@': '/src',
    },
  },
  server: {
    open: true,
  },
});
