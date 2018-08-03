module.exports = {
  env: {
    browser: false,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: ["error", "tab"],
    // "linebreak-style": ["warn", "windows"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": ["error", { allow: ["warn", "error", "log", "info"] }]
  }
};
