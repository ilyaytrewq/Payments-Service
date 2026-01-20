import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For local dev without nginx: /api -> localhost:5050
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
    },
  },
});
