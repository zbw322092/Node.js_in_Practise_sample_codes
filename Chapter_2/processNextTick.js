var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var content;

function complexOperations() {
	var events = new EventEmitter();

	// code like this will not trigger 'success' event callback, since 'success'
	// event is emitted before 'success' event be subscribed
	// events.emit('success');

	process.nextTick(function() {
		events.emit('success');
	});

	return events;
}

// complexOperations().on('success', function() {
// 	console.log('success!');
// });

function readFileIfRequired(cb) {
	if (!content) {
		fs.readFile(__filename, 'utf8', function(err, data) {
			content = data;
			console.log('readFileIfRequired: readFile');
			cb(err, content);
		});
	} else {
		process.nextTick(function() {
    	console.log('readFileIfRequired: cached');
    	cb(null, content);
		});
	}
}

readFileIfRequired(function(err, data) {
	console.log('1. Length:', data.length);

	readFileIfRequired(function(err, data2) {
  	console.log('2. Length:', data2.length);
	});

	console.log('Reading file again...');
});

console.log('Reading file...');





