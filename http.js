// http 模块就是用来， 起node得http服务和在node中进行http请求得

var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

// 返回404报错
function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: resource not found');
  response.end();
}

// 返回200，正确请求的内容
function send200(response, filePath, fileContents) {
  console.log('mime', mime)
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(fileContents);
}

// 提供静态数据的方法
function serveStatic(response, cache, abcPath) {
  if(cache[abcPath]) {
    send200(response, abcPath, cache[abcPath]);
  } else {
    fs.exists(abcPath, (exists) => {
      if(exists) {
        fs.readFile(abcPath, (err, data) => {
          if(err) {
            send404(response);
          } else {
            cache[abcPath] = data;
            send200(response, abcPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}

// 创建静态文件http服务
var server = http.createServer();
server.on('request', (request, response) => {
  var filePath = false;
  if(request.url == '/') {
    filePath = 'public/index.html';
  } else {
    filePath = 'public' + request.url;
  }
  var absPath = './' + filePath;
  serveStatic(response, cache, absPath);
});

// 启动静态文件http服务
server.listen(5000, () => {
  console.log('sever listen 5000');
});