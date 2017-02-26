var fs = require('fs');
var locker = require('./lockfileModule.js');

// fs.open('config.lock', 'wx', function(err) {
// 	if (err) return console.log(err);
// });

// fs.writeFile('config.lock', process.pid, { flags: 'wx' }, function(err) {
// 	if (err)
// 		return console.log.error(err);
// });

// fs.mkdir('config.lock', function(err) {
// 	if (err)
// 		return console.error(err);

// 	fs.writeFile('config.lock/' + process.pid, function(err) {
// 		if (err)
// 			return console.error(err);


// 	})
// });

locker.lock(function(err) {
	if (err)
		throw err;

	console.log('I am working here');
	locker.unlock(function() {});
});