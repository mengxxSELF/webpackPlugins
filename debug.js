const webpack = require('webpack')
const options = require('./webpack.config')

debugger
const compiler = webpack(options)

function compilerCb(err, status) {
  const statusStr = status.toString()
  console.log(statusStr)
}

compiler.run((err, status) => {
  compilerCb(err, status)
})
