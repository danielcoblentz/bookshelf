import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  react.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaFeatures: {
          jsx: true, // enable JSX parsing
        },
      },
      globals: globals.browser,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed if using React 17+
      "no-console": "warn",
      "no-undef": "error",
    },
  },
];
