// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  modules: [
    '@nuxtjs/html-validator',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],

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