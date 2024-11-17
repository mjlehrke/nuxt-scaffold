# Very Opinionated Nuxt Starter

This Nuxt Starter is a very opinionated scaffold with lots of conveniences out of the box. Example code and files for various features are included.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt.

## Features

### Production

- [SCSS](https://sass-lang.com/) for styling pages and Vue components
- [FormKit](https://formkit.com/) for handling forms
  - with icons and the Genesis them included
- [Nuxt Content](https://content.nuxt.com/) for static pages written in Markdown
- [Nuxt SEO](https://nuxtseo.com/) for page metadata, sitemaps, robots.txt, and schemas
- [Nuxt Fontaine](https://nuxt.com/modules/fontaine) for font optimization
- [VueUse](https://vueuse.org/) for useful Vue utilities

### Dev

- [Eslint](https://eslint.org/) for JS, TS, and Vue code linting
  - with [Antfu's config](https://eslint-config.antfu.me/)
  - with [eslint-plugin-compat](https://www.npmjs.com/package/eslint-plugin-compat) for checking browser features
  - with [eslint-plugin-format](https://www.npmjs.com/package/eslint-plugin-format) for linting markdown (part of Antfu's config)
  - with [eslint-plugin-no-secrets](https://www.npmjs.com/package/eslint-plugin-no-secrets) to prevent committing secrets
  - with [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) for best code security practices
  - with [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs) to help with clean code
  - with [eslint-plugin-vuejs-accessibility](https://www.npmjs.com/package/eslint-plugin-vuejs-accessibility) to help keep things accessible
- [Stylelint](https://stylelint.io/) for style linting
  - with [stylelint-order](https://www.npmjs.com/package/stylelint-order) to keep properties in order
- [commitlint](https://commitlint.js.org/) for git commit linting
- [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/lint-staged/lint-staged) for automatic linting of committed files
- [Vitest](https://vitest.dev/) for unit testing, snapshots, and test coverage
  - with the UI included
- [vue-tsc](https://www.npmjs.com/package/vue-tsc) for TS typechecking

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

Lint JS and TS:

```bash
# npm
npm run eslint
```

Correct fixable linting errors:

```bash
# npm
npm run eslint:fix
```

Lint styles:

```bash
# npm
npm run stylelint
```

Correct fixable styling errors:

```bash
# npm
npm run stylelint:fix
```

Run TS typechecking:

```bash
# npm
npm run typecheck
```

## Testing

Run all tests:

```bash
# npm
npm run test
```

Run unit tests:

```bash
# npm
npm run test
```

Run test coverage:

```bash
# npm
npm run test:coverage
```

Run tests with Vitest UI:

```bash
# npm
npm run test:ui
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
