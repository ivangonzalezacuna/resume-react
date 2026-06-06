import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier/flat";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default tseslint.config(
  { ignores: ["node_modules/**", "dist/**", "build/**", "eslint.config.js"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { ...reactPlugin.configs.flat.recommended, files: ["**/*.{jsx,tsx}"] },
  { ...reactPlugin.configs.flat["jsx-runtime"], files: ["**/*.{jsx,tsx}"] },
  reactHooks.configs.flat["recommended-latest"],
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "19" },
    },
    rules: {
      "no-console": "warn",
      quotes: ["error", "double"],
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/jsx-one-expression-per-line": "off",
      "no-use-before-define": "off",
    },
  },
);
