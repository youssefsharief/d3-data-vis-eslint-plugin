# eslint-plugin-d3

Disallow d3 functions with native equivalents.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-d3`:

```
$ npm install eslint-plugin-d3 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-d3` globally.

## Usage

Add `d3` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.

You can either enable individual rules as follows:
```json
{
  "plugins": [
    "d3"
  ],
  "rules": {
    "d3/no-pie": 2,
  }
}
```

Or you can use the full set of rules:
```json
{
  "plugins": [
    "d3"
  ],
  "extends": [
    "plugin:d3/recommended"
  ]
}
```

## Development

```
npm install
npm test
```

## License

Distributed under the MIT license. See LICENSE for details.
