#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

var lib = require('../lib/react-style')

var filePath = process.argv[process.argv.length - 1]

console.log('filePath', filePath)
var src = fs.readFileSync(filePath, 'utf8')

var opts = {
  dir: path.resolve(filePath)
}

lib(src, opts)