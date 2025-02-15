import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], // 파일 대상은 .js
    rules: {
      eqeqeq: ["error", "always"],
      "no-multi-spaces": "error",
      "comma-dangle": ["error", "never"],
    },
    plugins: ["jest"],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];
