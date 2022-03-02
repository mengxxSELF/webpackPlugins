// google 异常上报
const HtmlWebpackPlugin = require('html-webpack-plugin')

class ErrorReportPlugin {
  constructor(options) {
    // 这里接受到异常上报URL地址
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('ErrorReportPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tap('ErrorReportPlugin', (data, cb) => {
        data.html += `\n <script src=${this.options.url}> </script>`
        cb && cb(null, data)
      })
    })
  }
}

module.exports = ErrorReportPlugin
