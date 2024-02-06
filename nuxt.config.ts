// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', 'nuxt-mongoose'],

  runtimeConfig: {
    public: {
      siteUrl: '',
    },
  },

  css: ['~/assets/css/global.css'],
  typescript: {
    shim: false,
  },
})
