const createAliasSetting = require('@vue/eslint-config-airbnb-with-typescript/createAliasSetting');
const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser',
    project: [path.resolve(__dirname, './tsconfig.json')],
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
  },
  settings: {
    ...createAliasSetting({
      '@': path.resolve(__dirname, './src'),
    }),
  },
};
