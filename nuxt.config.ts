// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-03-12",
  nitro: {
    preset: 'node-server'
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
