// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3009,
  },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  css: ['~/assets/css/app.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  compatibilityDate: '2024-07-04',
});
