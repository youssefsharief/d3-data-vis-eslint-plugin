# User Guide

## :cd: Installation

Via [npm](https://www.npmjs.com/):
```bash
npm install --save-dev eslint eslint-plugin-d3
```

Via [yarn](https://yarnpkg.com/):
```bash
yarn add -D eslint eslint-plugin-d3
```

::: tip Requirements
- ESLint v5.4 and above
- Node.js v10.16.3 and above
:::

## :book: Usage

### Configuration

Use `.eslintrc.*` file to configure rules. See also: [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring).

Example **.eslintrc.js**:

```js
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:d3/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'd3/no-pie': 'error'
  }
}
```


### Running ESLint from command line

If you want to run `eslint` from command line, make sure you include the `.d3` extension using [the `--ext` option](https://eslint.org/docs/user-guide/configuring#specifying-file-extensions-to-lint) or a glob pattern because ESLint targets only `.js` files by default.

Examples:

```bash
eslint --ext .js,.d3 src
eslint "src/**/*.{js,d3}"
```