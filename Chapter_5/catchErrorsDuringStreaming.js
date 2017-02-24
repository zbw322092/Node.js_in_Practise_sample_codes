var fs = require('fs');
var stream = fs.createReadStream('not found');

stream.on('error', function(err) {
	console.trace();
	console.error('Stack: ', err.stack);
	console.error('The error raised was: ', err);
});