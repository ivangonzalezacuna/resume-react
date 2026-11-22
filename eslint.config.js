import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier/flat";
import globals from "globals";

export default defineConfig(
  { ignores: ["dist/**", "build/**"] },
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
    },
  },
);
