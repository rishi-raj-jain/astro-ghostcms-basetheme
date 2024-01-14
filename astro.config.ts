import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mysite.com",
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  build: {
    //
  },
  server: {
    port: 4321,
  },
  vite: {
    resolve: {
      alias: {
        "~": "/src",
        $components: "/src/components",
      },
    },
  },
  integrations: [sitemap()],
});
