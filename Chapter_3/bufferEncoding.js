var fs = require('fs');
fs.readFile('./names.txt', function(err, buf) {
	// console.log(Buffer.isBuffer(buf)); // true

	console.time('read1');
	console.log(buf);
	console.timeEnd('read1');

	// when the size of read file is big, the performance gap will be noticed between below two methods
	console.time('read2');
	buf.toString();
	console.timeEnd('read2');

	console.time('read3');
	buf.toString('ascii');
	console.timeEnd('read3');
});

// base64 encoded
var username = 'johnny';
var pass = '1234';
var encoded = Buffer(username + ':' + pass).toString('base64');
console.log(encoded);

// data URIs
var mime = 'image/png';
var encoding = 'base64';
var data = fs.readFileSync('./github.png').toString(encoding);
var uri = 'data:' + mime + ';' + encoding + ',' + data;
console.log(uri);

var picData = uri.split(',')[1];
var picBuf = Buffer(picData, 'base64');
fs.writeFileSync('./github_second.png', picBuf);

