var stream = require('stream');
var util = require('util');

util.inherits(MemoryStream, stream.Readable);

function MemoryStream(options) {
	options = options || {};
	options.objectMode = true;
	stream.Readable.call(this, options);
}

MemoryStream.prototype._read = function(size) {
	this.push(process.memoryUsage());
};

var memoryStream = new MemoryStream();

memoryStream.on('readable', function() {
	var output =  memoryStream.read();
	console.log('Type: %s, value: %j', typeof output, output);
});