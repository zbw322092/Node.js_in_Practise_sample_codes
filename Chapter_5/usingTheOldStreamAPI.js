var stream = require('stream'); 
var Readable = stream.Readable; 
var util = require('util');

util.inherits(MemoryStream, stream);

function MemoryStream(interval) {
	// The older API required that classes inherited from the stream module and set the 
	// readable property to true
	this.readable = true;

	setInterval(function() {
		var data = process.memoryUsage();
		data.date = new Date();

		this.emit('data', JSON.stringify(data) + '\n');
	}.bind(this), interval);
}

var memoryStream = new MemoryStream(250);
var wrappedStream = new Readable().wrap(memoryStream);

wrappedStream.pipe(process.stdout);