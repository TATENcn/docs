export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "fr",
        name: "Français",
      },
      { code: "zh-CN", name: "简体中文" },
    ],
  },
});
