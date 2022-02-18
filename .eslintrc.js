module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:cypress/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'import/extensions': ['off'],
    'import/prefer-default-export': 'off',
  },
};
