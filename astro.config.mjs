// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to your final domain once it's connected in Vercel
// (e.g. 'https://mosarhan.io'). It's only used for sitemap / canonical URLs.
export default defineConfig({
  site: 'https://mosarhan.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
