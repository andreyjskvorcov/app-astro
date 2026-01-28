/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  ignoreFiles: ["**/dist/**", "**/.astro/**", "**/node_modules/**"],

  overrides: [
    // SCSS файлы
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },

    // Vue SFC (чтобы не ругался на </style> и понимал <style lang="scss">)
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
    },
  ],

  rules: {
    "color-function-notation": null,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
  },
};