# Developer Guide

Contributing is welcome.

## :bug: Bug reporting

If you think you’ve found a bug in ESLint, please [create a new issue](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/issues/new?labels=&template=bug_report.md) or a pull request on GitHub.

Please include as much detail as possible to help us properly address your issue. If we need to triage issues and constantly ask people for more detail, that’s time taken away from actually fixing issues. Help us be as efficient as possible by including a lot of detail in your issues.

## :sparkles: Proposing a new rule or a rule change

In order to add a new rule or a rule change, you should:

- Create issue on GitHub with description of proposed rule
- Write test scenarios & implement logic
- Describe the rule in the `docs` folder
- Make sure all tests are passing
- Run `npm run test` and fix any errors
- Create PR and link created issue in description

We're more than happy to see potential contributions, so don't hesitate. If you have any suggestions, ideas or problems feel free to add new [issue](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/issues), but first please make sure your question does not repeat previous ones.

## :fire: Working with rules

Before you start writing new rule, please read the [official ESLint guide](https://eslint.org/docs/developer-guide/working-with-rules).

Next in order to get an idea how does the AST of the code that you want to check looks like, you can use one of the following applications:
- [astexplorer.net](https://astexplorer.net/) - best tool to inspect ASTs


Check out an [example rule](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/blob/master/rules/no-pie.js) to get a better understanding of how these work.

Please be aware that regarding what kind of code examples you'll write in tests, you'll have to accordingly setup the parser in `RuleTester` (you can do it on per test case basis though). [See an example here](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/blob/master/tests/no-pie.js)
