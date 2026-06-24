import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    sitemap({
      hostname: "https://ivangonzalezacuna.com",
      changefreq: "monthly",
      generateRobotsTxt: false,
    }),
  ],
});
