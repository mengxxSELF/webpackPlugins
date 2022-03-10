function normal3(source) {
  console.log('i am normal3-loader')
  return source
}

normal3.pitch = () => {
  console.log('i am normal3-loader pitch')
}

module.exports = normal3
