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

// 返回404报错
function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: resource not found');
  response.end();
}

// 返回200，正确请求的内容
function send200(response, filePath, fileContents) {
  response.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}