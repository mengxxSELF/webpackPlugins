const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorReportPlugin = require("./plugins/ErrorReportPlugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ErrorReportPlugin({ url: "xxx" }),
  ],
};
