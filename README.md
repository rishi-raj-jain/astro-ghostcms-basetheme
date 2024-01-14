# Astro 4 - GhostCMS

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d3bd81d-26c7-4ca7-a6c5-194da1f96205/deploy-status)](https://app.netlify.com/sites/astro-ghostcms-basetheme-demo/deploys)

[Live Demo](https://astro-ghostcms-basetheme-demo.netlify.app/)

This Theme uses the `@adammatthiesen/astro-ghostcms` astro addon to interface with your own GhostCMS Installation to build **FAST** Websites with your Ghost Backend and an Astro Frontend.  This theme is currently setup only for SSG **NOT SSR** but yes you can indeed setup ghost for SSR.  This theme is also based on the Ghost Casper theme converted to SCSS by PhilDL

### Routes

The routes are the same as a standard Ghost Blog so you can migrate to Astro easily.

| Route                 | Content                                   |
| --------------------- | ----------------------------------------- |
| `/`                   | Homepage with recents/features Blog Posts |
| `/[slug]`             | Post or Page                              |
| `/author/[slug]`      | Author page with related posts            |
| `/authors`            | All the authors                           |
| `/tag[slug]`          | Tag page with related posts               |
| `/tags`               | All the tags                              |
| `/archives/[...page]` | All the posts, paginated                  |

## Ghost API Key

You will need to create a new integration in your Ghost backend and note the Ghost URL and Content API Key.

Then, for local developpement create `.env` and fill it with the Ghost URL and API Key:

```
CONTENT_API_URL=https://ghostdemo.matthiesen.xyz
CONTENT_API_KEY=a33da3965a3a9fb2c6b3f63b48
```

If you Deploy on Netlify, Vercel, etc you will have to set the same environement variables.

Credits:

- PhilDL [Astro-Starter-Ghost](https://github.com/PhilDL/astro-starter-ghost) - Original Conversion of theme, his version uses `@ts-ghost` version of Content-API.