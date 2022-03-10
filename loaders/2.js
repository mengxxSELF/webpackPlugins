function normal2(source) {
  console.log('i am normal2-loader')
  return source
}

normal2.pitch = () => {
  console.log('i am normal2-loader pitch')

  return 'return-2-loader'
}

module.exports = normal2
