# eslint-config-thread

Our ESLint config that we should use for all frontend JS based projects, published so we can easily share it across all codebases that need it.

# Dependencies

This configuration depends on many ESLint plugins:

- babel-eslint
- eslint-config-prettier
- eslint-config-unobtrusive
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-react

# Usage

```
yarn add @teamthread/eslint-config-thread
```

You should also ensure all of the above peer dependencies are installed into your project. Unfortunately there is no way to automatically do this.

Then, update your `.eslintrc.js` file:

```
extends: ['@teamthread/eslint-config-thread']
```

# Changelog

*0.1.0* [10 May]

- First release!