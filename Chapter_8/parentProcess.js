var cp = require('child_process');
var child = cp.fork('./childProcess.js');

child.on('message', function(msg) {
	console.log('Got a message from child', msg);
});
child.send('sending a string');

setTimeout(function() {
	child.disconnect();
}, 5000);
