var stream = require('stream');
var util = require('util');
var chalk = require('chalk');

util.inherits(MemoryStream, stream.Readable);
util.inherits(OutputStream, stream.Writable);

function MemoryStream() {
	this.isTTY = process.stdout.isTTY;
	stream.Readable.call(this);
}

MemoryStream.prototype._read = function() {
	var text = JSON.stringify(process.memoryUsage()) + '\n';
	if (this.isTTY) {
		this.push(chalk.green(text));
	} else {
		this.push(text);
	}
};

function OutputStream() {
	stream.Writable.call(this);
	this.on('pipe', function(dest) {
		dest.isTTY = this.isTTY;
	}.bind(this));
}

OutputStream.prototype._write = function(chunk, encoding, cb) {
	util.print(chunk.toString());
	cb();
};

var memoryStream = new MemoryStream();

// memoryStream.pipe(new OutputStream);
memoryStream.pipe(process.stdout);