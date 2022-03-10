function normal1(source) {
  console.log('i am normal1-loader')
  return source
}

normal1.pitch = () => {
  console.log('i am normal1-loader pitch')
}

module.exports = normal1
