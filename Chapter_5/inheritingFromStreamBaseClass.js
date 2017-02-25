var Readable = require('stream').Readable;

function MyStream(options) {
	Readable.call(this, options);
}

MyStream.prototype = Object.create(Readable.prototype, {
	constructor: {
		value: MyStream
	}
});
