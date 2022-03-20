const path = require('path')

const types = require('@babel/types')

module.exports = function () {
  return {
    visitor: {
      CallExpression(pathBabel, state) {
        const { node } = pathBabel

        // 是不是一个表达式
        if (types.isMemberExpression(node.callee)) {
          if (node.callee.object.name === 'console') {
            if (['log', 'info', 'warn', 'error', 'debug'].includes(node.callee.property.name)) {
              const { line, column } = node.loc.start
              const relativeFileName = path.relative(__dirname, state.file.opts.filename).replace(/\\/g, '/')
              node.arguments.unshift(types.stringLiteral(`${relativeFileName} ${line}:${column}`))
            }
          }
        }
      },
    },
  }
}
