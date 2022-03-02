const Tplugin = require("./tplugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  plugins: [new Tplugin()],
};
