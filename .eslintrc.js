module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-import',
    "jsx-a11y"
  ],
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    __PATH_PREFIX__: true,
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
    "eslint:recommended",
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 0
  },
  overrides: [
  ],
};