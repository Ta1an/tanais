// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },


  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/icon", "@nuxt/fonts"],

  icon: {
    mode: 'css',
    cssLayer: 'base'
  },

  fonts: {
    defaults: {
      subsets: [
        'cyrillic-ext',
        'cyrillic',
      ]
    },
    families: [
      {name: 'M PLUS 1p', provider: 'google'},
    ]
  }
})