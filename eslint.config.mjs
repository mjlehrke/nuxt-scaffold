// @ts-check
import antfu from '@antfu/eslint-config';
import pluginCompat from 'eslint-plugin-compat';
import pluginNoSecrets from 'eslint-plugin-no-secrets';
import pluginSecurity from 'eslint-plugin-security';
import pluginSonar from 'eslint-plugin-sonarjs';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    jsonc: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    formatters: {
      markdown: 'prettier',
    },

    rules: {
      'antfu/if-newline': 'off',

      'eslint-comments/disable-enable-pair': 'warn',

      'style/arrow-parens': ['error', 'always'],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/member-delimiter-style': ['error', {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
        multilineDetection: 'brackets',
      }],
      'style/semi': ['error', 'always'],

      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      'vitest/no-duplicate-hooks': 'error',
      'vitest/prefer-hooks-in-order': 'error',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/prefer-to-be': 'error',
      'vitest/prefer-to-be-falsy': 'error',
      'vitest/prefer-to-be-object': 'error',
      'vitest/prefer-to-be-truthy': 'error',
      'vitest/prefer-to-contain': 'error',
      'vitest/prefer-to-have-length': 'error',
      'vitest/require-top-level-describe': 'error',

      'vue/html-self-closing': ['error', {
        html: { void: 'always', normal: 'never', component: 'always' },
        svg: 'always',
        math: 'always',
      }],
      'vue/singleline-html-element-content-newline': ['warn', {
        externalIgnores: ['router-link', 'NuxtLink'],
      }],
    },
  }, {
    files: ['**/*.test.*', '**/*.spec.*'],
    rules: {
      'no-secrets/no-secrets': 'off',

      'security/detect-object-injection': 'off',
    },
  }).prepend([
    pluginSonar.configs.recommended,
    pluginSecurity.configs.recommended,
    pluginCompat.configs['flat/recommended'],
    ...pluginVueA11y.configs['flat/recommended'],
    {
      plugins: {
        'no-secrets': pluginNoSecrets,
        pluginSonar,
      },
      rules: {
        'no-secrets/no-secrets': 'error',
      },
    },
  ]),
);
