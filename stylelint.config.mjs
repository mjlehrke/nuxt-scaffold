/** @type {import('stylelint').Config} */
export default {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    '@stylistic/stylelint-config',
  ],
  ignoreFiles: ['coverage/**', '.nuxt/**', '.output/**'],
  rules: {
    'color-named': 'never',
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',

    'order/properties-alphabetical-order': true,

    '@stylistic/string-quotes': 'single',
  },
};
