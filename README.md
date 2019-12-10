# eslint-plugin-d3

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-d3.svg?style=flat)](https://npmjs.org/package/eslint-plugin-d3)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-plugin-d3.svg?style=flat)](https://npmjs.org/package/eslint-plugin-d3)
[![License](https://img.shields.io/github/license/youssefsharief/d3-data-vis-eslint-plugin.svg?style=flat)](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/blob/master/LICENSE)

> ESLint plugin for D3.js

## :book: Documentation

See [the official website](https://d3-data-vis-eslint-plugin.youssefsharief.now.sh).

## :anchor: Versioning Policy

This plugin is following [Semantic Versioning](https://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## :newspaper: Changelog

This project uses [GitHub Releases](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/releases).

## :beers: Contribution Guide

Contribution is welcome!

See [The ESLint D3 Plugin Developer Guide](https://d3-data-vis-eslint-plugin.youssefsharief.now.sh/developer-guide/).

### Working with Rules

Before you start writing a new rule, please read [the official ESLint guide](https://eslint.org/docs/developer-guide/working-with-rules).

Next, in order to get an idea how does the AST of the code that you want to check looks like, use one of the following applications:
- [astexplorer.net](https://astexplorer.net/) - the best tool to inspect ASTs

To know more about certain nodes in produced ASTs, go here:
- [ESTree docs](https://github.com/estree/estree)

Check out [an example rule](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/blob/master/rules/no-pie.js) to get a better understanding of how these work.

Please be aware that regarding what kind of code examples you'll write in tests, you'll have to accordingly set up the parser in `RuleTester` (you can do it on a per test case basis). See an example [here](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/blob/master/tests/no-pie.js).

If you'll stuck, remember there are plenty of rules you can learn from already. If you can't find the right solution, don't hesitate to reach out in [issues](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/issues) – we're happy to help!

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).