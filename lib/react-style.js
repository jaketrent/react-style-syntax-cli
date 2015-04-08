
var syntax = require('react-style-syntax')
var sassLoader = require('sass-loader')

function prepForReactStyleSyntax(src) {
  return 'StyleSheet.create`' + src + '`'
}

var fakeWebpack = {
  async: function () {
    return false
  },
  cacheable: function () {
    return false
  }
}

function FakeWebpack() {}
FakeWebpack.prototype.async = function () { return false }
FakeWebpack.prototype.cacheable = function () { return false }

function genFakeWebpack(opts) {
  var webpack = new FakeWebpack()
  webpack.resourcePath = opts.dir
  return webpack
}


function reactStyle(src, opts) {

  console.log('opts', opts)
  console.log('str', src)

  var cssOutput = sassLoader.call(genFakeWebpack(opts), src)
  console.log('\n\n----------cssOutput', cssOutput)

  var output = syntax.transformString(prepForReactStyleSyntax(cssOutput))

  console.log('\n\n--------------output', output)
}

module.exports = reactStyle