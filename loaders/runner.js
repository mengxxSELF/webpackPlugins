const { runLoaders } = require('loader-runner')
const path = require('path')

const entry = path.resolve(__dirname, '../index.js')

// const rules = [
//   {
//     test: /\.m$/,
//     use: path.resolve(__dirname, 'loaders/m-loader'),
//   },
//   {
//     test: /\.m$/,
//     use: path.resolve(__dirname, 'loaders/y-loader'),
//   },
// ]

let loaders = [path.resolve(__dirname, './m-loader')]

const source = entry

// for (let index = 0; index < rules.length; index++) {
//   const { test: fileType, use } = rules[index]

//   if (fileType.test(source)) {
//     loaders.push(use)
//   }
// }

// console.log(loaders, '-loaders')

runLoaders(
  {
    resource: entry,
    loaders: loaders,
  },
  (err, result) => {
    console.log(result)
    console.log(result.resourceBuffer.toString())
  },
)
