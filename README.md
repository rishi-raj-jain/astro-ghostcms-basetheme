# Astro 4 - GhostCMS

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
