// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/fontaine',
    '@nuxtjs/seo',
    '@formkit/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@nuxt/test-utils/module',
  ],

  routeRules: {
    // Pre-render the markdown content pages
    '/docs/**': { prerender: true, sitemap: { changefreq: 'yearly' } },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      // Prerender static SEO files
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },

  sitemap: {
    cacheMaxAgeSeconds: 3600,
    credits: false,
  },

  robots: {
    disallow: [],
    debug: true,
    credits: false,
  },

  schemaOrg: {
    identity: 'Organization',
  },

  formkit: {
    autoImport: true,
  },

  eslint: { config: { standalone: false } },
  stylelint: { lintOnStart: false },

  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          // Injects provided globals into every Vue file. e.g. variables
          // Use with the "globals" namespace. e.g. globals.$brand-color
          additionalData: '@use "~/assets/styles/globals/globals.scss";',
        },
      },
    },
  },

  experimental: { inlineRouteRules: true },
  compatibilityDate: '2024-04-03',
  telemetry: false,
});
