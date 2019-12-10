'use strict'

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    return {
      CallExpression: function(node) {
        if (node.callee.type !== 'MemberExpression') return
        if (node.callee.object.name !== 'd3') return

        const name = node.callee.property.name
        switch (name) {
          case 'pie':
            context.report({
              node: node,
              message: "Don't use a pie chart. Read more here. https://eslint-plugin-d3.now.sh/rules/#d3-no-pie"
            })
        }
      }
    }
  }
}
