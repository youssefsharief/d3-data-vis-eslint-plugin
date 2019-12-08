'use strict'

module.exports = {
  rules: {
    'no-pie': require('./rules/no-pie')
  },
  configs: {
    recommended: {
      rules: {
        'd3/no-pie': 2
      }
    }
  }
}
