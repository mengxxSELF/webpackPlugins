const { SyncHook } = require('tapable')

class Compiler {
  constructor(options) {
    this.options = options
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook(),
    }
  }
  run() {
    // 模块
    let modules = []
    // call 是实例 SyncHook 的API
    this.hooks.run.call()

    // 入口文件
    const entry = this.options.entry

    // loader 处理模块
    const entrySource = babelLoader(entry)

    let entryModule = { id: entry, source: entrySource }

    modules.push(entryModule)

    // babel loader 转为 AST 抽象语法树  分析依赖文件 假如有一个依赖文件 a.js
    const aSource = babelLoader('a.js')

    let aModule = { id: 'a', source: aSource }

    modules.push(aModule)

    // chunk 代码块  一个代码块中可能有多个模块

    let chunks = []
    const chunk = {
      name: 'chunkname',
      modules,
    }

    chunks.push(chunk)

    let files = []

    let file = {
      file: this.options.output.filename,
      source: 'xxxx',
    }

    files.push(file)

    //
    fs.writeFileSync(this.options.output, file.source)

    this.hooks.done.call()
  }
}

// 1
const options = require('./webpack.config')
// 2
const compiler = new Compiler(options)
//
const plugins = options.plugins || []

if (plugins.length) {
  for (const plugin of plugins) {
    plugin.apply(compiler)
  }
}

compiler.run()

function babelLoader(file) {
  return 'xxxx'
}
