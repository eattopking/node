// path 模块， 就是获取绝对路径或者相对路径， 和处理绝对路径或者相对路径的模块

const path = require('path');

// let a = path.dirname(__filename) + '/path.js'
let a = path.join('../name', './regx/regx.js')

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))

console.log(path.relative('/data/demo', '/data/demo'))

console.log(path.relative('/data/demo', ''))
