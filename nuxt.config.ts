export default defineNuxtConfig({
  extends: "content-wind",
  modules: ["@nuxthq/studio", "@nuxt/image"],
  routeRules: {
    "/": { prerender: true },
  },
  studio: {
    gitInfo: {
      name: "content-wind",
      owner: "horvbalint",
      url: "https://github.com/horvbalint/content-wind",
    },
  },
});
