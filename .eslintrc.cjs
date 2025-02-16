module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },

  extends: ['airbnb-base', 'prettier'],
  overrides: [],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-return-await': 'off',
    'no-console': 'off',
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'off',
    'no-unreachable-loop': 'off',

    indent: 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',

  },
};
