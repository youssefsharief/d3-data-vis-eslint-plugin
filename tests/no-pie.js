'use strict'

const rule = require('../rules/no-pie')
const RuleTester = require('eslint').RuleTester

const pieChartError = "Don't use a pie chart"

const ruleTester = new RuleTester()
ruleTester.run('no-ajax', rule, {
  valid: [`d3.bar()`, 'd3.line()'],
  invalid: [
    {
      code: 'd3.pie()',
      errors: [{message: pieChartError, type: 'CallExpression'}]
    }
  ]
})
