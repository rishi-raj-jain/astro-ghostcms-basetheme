import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-ghostcms-basetheme-demo.netlify.app/",
  server: { port: 4321, },
  vite: {
    resolve: {
      alias: {
        "~": "/src",
        $components: "/src/components",
      }, },
  },
  integrations: [sitemap()],
});
