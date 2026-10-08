// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    },
  },

  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/icon", "@nuxt/fonts", "motion-v/nuxt"],

  icon: {
    mode: "css",
    cssLayer: "base",
  },

  fonts: {
    defaults: {
      subsets: ["cyrillic-ext", "cyrillic"],
    },
    families: [
      {
        name: "Onest",
        provider: "google",
        weights: ["400 500 600 700"],
        styles: ["normal"],
      },
      {
        name: "Golos Text",
        provider: "google",
        weights: ["400 700"],
        styles: ["normal"],
      },
    ],
  },
});
