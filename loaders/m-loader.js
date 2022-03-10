function mLoader(source) {
  // console.log('get my source')
  // console.log(source)
  console.log('i am m-loader')
  return source
}

mLoader.pitch = () => {
  console.log('i am m-loader pitch')
}

module.exports = mLoader
