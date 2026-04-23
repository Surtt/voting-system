// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiurl: "",
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  fonts: {
    defaults: {
      weights: ["300", "400", "700"],
    },
  },

  modules: [
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
  ],
});
