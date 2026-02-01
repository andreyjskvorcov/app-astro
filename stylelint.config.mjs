/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  ignoreFiles: ["**/dist/**", "**/.astro/**", "**/node_modules/**"],

  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },

    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
    },
  ],

  rules: {
    "color-function-notation": null,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "color-function-alias-notation": null,
  },
};