module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["node_modules/", ".eslintrc.cjs", "dist/", "api/"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react-refresh"],
  rules: {
    eqeqeq: "warn",
    curly: "error",
    quotes: ["error", "double"],
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
