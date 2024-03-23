import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ody-time.vercel.app/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs. main page: https://odyssey-theme.sapling.supply/
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon(), tailwind()] // Add renderers to the config
});