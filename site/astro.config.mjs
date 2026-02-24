import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alfred-pi.github.io',
  base: '/blessing',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: { port: 4040, host: true },
});
