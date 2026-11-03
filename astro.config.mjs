import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Déployé sur GitHub Pages : https://<utilisateur>.github.io/<dépôt>/
// Le workflow GitHub Actions définit SITE et BASE. En local, valeurs par défaut.
const site = process.env.SITE || 'http://localhost:4321';
const base = process.env.BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-MA', ar: 'ar-MA', en: 'en' } },
    }),
  ],
  prefetch: { prefetchAll: false, defaultStrategy: 'viewport' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  build: { inlineStylesheets: 'auto' },
});
