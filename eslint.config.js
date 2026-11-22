import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier/flat";
import globals from "globals";

export default defineConfig(
  { ignores: ["node_modules/**", "dist/**", "build/**", "eslint.config.js"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: { parserOptions: { projectService: true } },
  },
  { ...reactPlugin.configs.flat.recommended, files: ["**/*.{jsx,tsx}"] },
  { ...reactPlugin.configs.flat["jsx-runtime"], files: ["**/*.{jsx,tsx}"] },
  reactHooks.configs.flat.recommended,
  prettierConfig,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "19" },
    },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/jsx-one-expression-per-line": "off",
      "no-use-before-define": "off",
    },
  },
);
