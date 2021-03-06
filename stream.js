
/**
 * 1. stream 模块 开发者一般是不直接 const stream = require('stream'),这样使用的， 这样使用都是node底层值自己使用,
 * 2.stream实例都是EventEmitter类的实例， 所以stream实例本身也是一个自定义事件发射器， 可以注册事件，
 * 而且对应事件触发条件都已经约定好了， 不需要我们手动触发， 对于不同模块获得的stream， stream注册事件的触发时机是不一样的
 * 3. 开发者使用stream都是通过使用其他的模块， 而得到stream实例，在使用stream实例的方法， 来实现我们管道化,
 * 比如  node 进行http请求的请求体就是一个stream， fs.createWriteStream, process.stdin, fs.createReadStream
 *
 * 4. 使用stream， 它是可读可写的， 也可以时可读的， 也可以是可写的
 */

const http = require('http');
const path = require('path');

const fs = require('fs');

// 监听终端输入的值
process.stdin.on('data', (a) => {
    console.log(111, a);
});

// 得到读取文件的stream实例， 并注册时事件
const fileName = path.resolve(__dirname, 'README.md')
let stream = fs.createReadStream(fileName);

stream.on('data', (a) => {
    console.log(111, a);
});

// 将数据写到stream中
// 得到写入文件的stream实例， 这实例可以通过充当stream.pipe()的参数，将其他数据写入到文件中
const fsStream = fs.createWriteStream('./file');



