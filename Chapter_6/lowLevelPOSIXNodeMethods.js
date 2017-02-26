var fs = require('fs');
var assert = require('assert');

var fd = fs.openSync('./file.txt', 'w+');
var writeBuf = new Buffer('some data to write');
fs.writeSync(fd, writeBuf, 0, writeBuf.length, 0);

var readBuf = new Buffer(writeBuf.length);
var result = fs.readSync(fd, readBuf, 0, writeBuf.length, 0);
console.log(result);

fs.closeSync(fd);