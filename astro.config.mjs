// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// When you point mosarhan.io at this repo, change these two lines to:
//   site: 'https://mosarhan.io',
//   base: '/',
// and add a `public/CNAME` file containing `mosarhan.io`.
export default defineConfig({
  site: 'https://themosarhan.github.io',
  base: '/MoSarhan',
  vite: {
    plugins: [tailwindcss()],
  },
});
