import { defineVitestConfig } from '@nuxt/test-utils/config';
import { coverageConfigDefaults } from 'vitest/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',

    coverage: {
      provider: 'v8',
      reporter: ['html'],
      exclude: [
        'commitlint.config.cjs',
        'lint-staged.config.cjs',
        'nuxt.config.ts',
        'stylelint.config.mjs',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
