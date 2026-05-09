# mosarhan.io

Personal site for Mo Sarhan — Lead Product / UI-UX Designer.
Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the production build locally
```

## Editing content

All copy lives inside `src/components/`:

| Section        | File                              |
| -------------- | --------------------------------- |
| Top nav        | `src/components/Nav.astro`        |
| Hero           | `src/components/Hero.astro`       |
| Skills marquee | `src/components/Marquee.astro`    |
| Selected work  | `src/components/Work.astro`       |
| About          | `src/components/About.astro`      |
| Approach       | `src/components/Approach.astro`   |
| Contact        | `src/components/Contact.astro`    |
| Footer         | `src/components/Footer.astro`     |

Global styles, fonts and the color palette: `src/styles/global.css`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

One-time setup in the repo:
**Settings → Pages → Build and deployment → Source: GitHub Actions.**

### Custom domain (`mosarhan.io`)

1. Point the apex `A` records (and `www` `CNAME`) at GitHub Pages
   ([docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
2. Create `public/CNAME` containing `mosarhan.io`.
3. In `astro.config.mjs` set `site: 'https://mosarhan.io'` and `base: '/'`.
