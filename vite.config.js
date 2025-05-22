import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    open: true,
    proxy: {
      '/api/proxy': {
        target: 'http://34.133.154.63:8000',  // your Google Cloud Storage IP & port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/proxy/, '/cat1_status.json'),
      },
    },
  },
});
