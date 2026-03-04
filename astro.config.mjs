// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://LucioB16.github.io',
  base: process.env.BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
