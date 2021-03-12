// net 模块， 是应用在传输层，针对于TCP协议的模块， 是创建TCP请求的客户端，和启动TCP服务的服务端的模块

// 其他例子再此实验
var net = require('net');
var EventEmitter = require('events').EventEmitter // node 事件模块

var server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('data', data);
  });
});

server.listen(8888);

// 自定义事件发射器
var channel  = new EventEmitter();
// 自定义事件
channel.on('list', () => {
  console.log('自定义事件')
});
channel.removeAllListeners('list');
// 触发自定义事件
channel.emit('list')

