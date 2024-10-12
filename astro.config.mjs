// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://readily-hk.github.io",
  base: "blog",
  // site: 'https://example.com',
  integrations: [mdx(), sitemap()],
});
