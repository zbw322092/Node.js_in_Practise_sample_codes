var CountStream = require('./countstream');
var countstream = new CountStream('books');
var http = require('http');

http.get('http://www.manning.com', function(res) {
	res.pipe(countstream);
});

countstream.on('total', function(count) {
	console.log('Total matches: ', count);
});