// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://LucioB16.github.io',
  base: '/juli-y-lucio-wedding',
  vite: {
    plugins: [tailwindcss()],
  },
});
