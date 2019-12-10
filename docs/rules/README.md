# Rules



Enforce all the rules with:

```json
{
  "extends": "plugin:d3/recommended"
}
```

## d3/no-pie
> enforce users not to use pie charts

- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can not automatically fix some of the problems reported by this rule.


### :books: Further reading

- [no-pie]

[The issue with pie chart]: https://www.data-to-viz.com/caveat/pie.html
[Pie charts are bad]: https://www.stevefenton.co.uk/2009/04/pie-charts-are-bad/ 
[Pie charts are the worst]: https://www.stevefenton.co.uk/2009/04/pie-charts-are-bad/ 

### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/blob/master/rules/no-pie.js)
- [Test source](https://github.com/youssefsharief/d3-data-vis-eslint-plugin/blob/master/tests/no-pie.js)
