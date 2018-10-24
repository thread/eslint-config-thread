module.exports = {
  env: {
    browser: true,
    jquery: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'jest'],
  extends: [
    'unobtrusive',
    'unobtrusive/import',
    'unobtrusive/react',
    'prettier',
  ],
  settings: {
    'import/ignore': [
      /\.elm$/, // the eslint import plugin won't have any joy on Elm files
    ],

    'import/resolver': {
      // so that the import plugin can parse our .babelrc aliases
      node: {
        extensions: ['.js', '.jsx', '.elm'],
      },
      'babel-module': {},
    },
  },
  rules: {
    'prettier/prettier': ['error'],

    // below are all overrides from the unobtrusive config we use as standard

    // generic rules
    'no-unused-vars': 'error',
    'no-restricted-globals': ['error', 'event'],

    // react based rules
    'react/no-unescaped-entities': 'error',
    // this bug is a show stopper for us: https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/no-typos': 'off',
    // we can be more strict here that the config is by default
    'react/no-unused-state': 'error',
    // display-name is really useful for debugging
    'react/display-name': 'error',

    // enforce prop types + that they are correct
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/default-props-match-prop-types': 'error',

    // TODO: it's not released in the latest npm release (7.5.1)
    // enable once it is
    // using `this` in a stateless func component is almost certainly an error
    // 'react/no-this-in-sfc': 'error',

    'react/prefer-stateless-function': 'warn',

    // don't think this is an issue and happens a lot with Redux connected components
    'import/no-named-as-default': 'off',

    // no imports should be absolute
    'import/no-absolute-path': 'error',

    // we shoudl not have any dynamic requires
    'import/no-dynamic-require': 'error',

    // all webpack config should live in the config files
    'import/no-webpack-loader-syntax': 'error',

    // just a bit tider
    'import/newline-after-import': 'error',

    // we should have all our import statements first
    // they will be hoisted anyway
    'import/first': 'error',

    'import/no-unresolved': [
      'error',
    ],
    'import/order': [
      'error',
      {
        // enforce we import builtins first, then external modules, and then anything else in any order
        groups: ['builtin', 'external'],
      },
    ],

    // rules from eslint-plugin-jest
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/valid-expect': 'error',
  },
};
