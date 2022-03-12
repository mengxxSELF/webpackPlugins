const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ErrorReportPlugin = require('./plugins/ErrorReportPlugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  optimization: {
    minimize: true,
    // minimizer: [new TerserPlugin()],
    //压缩CSS
    // minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    // new ErrorReportPlugin({ url: './2.js' }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.m$/,
      //   use: [
      //     path.resolve(__dirname, 'loaders/1'),
      //     path.resolve(__dirname, 'loaders/2'),
      //     path.resolve(__dirname, 'loaders/3'),
      //   ],
      // },
    ],
  },
  devServer: {
    port: 5679,
    static: './dist',
    open: true,
  },
}
