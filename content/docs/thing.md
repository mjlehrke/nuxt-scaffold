---
sitemap:
  loc: /content/thing
  lastmod: 2024-11-16
---

# Example content page

[Home](/) | [About](/about)

This is an example page loaded by the [Nuxt Content](https://content.nuxt.com/) module.

## Path

It resides in a "docs" folder to make pre-rendering a touch easier. You can put content pages in the top-level
"content" folder, but to enable pre-rendering you will have to add them in the `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  routeRules: {
    '/docs/**': { prerender: true, sitemap: { changefreq: 'yearly' } },
    // add other pages here
  },
});
```

## Markdown and Vue components

The content is written in Markdown, but you can use certain Vue components inside too! (These components are in the `/components/content` folder).

::content-hello
This text is coming from a Vue component!
::
