module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "no-alert": "off",
    "no-promise-executor-return": "off",
  },
  globals: {
    ymaps: "writable",
    yandexMap: "writable",
  },
};
