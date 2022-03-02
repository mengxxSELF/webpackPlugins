class TPligun {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.emit.tap("done", (compilation) => {
      console.log(compilation.assets);
    });
    console.log("i am tplugin");
  }
}

module.exports = TPligun;
