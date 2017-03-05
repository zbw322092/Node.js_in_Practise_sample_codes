process.on('message', function(job) {
	
	for (var i = 0; i < 10000000000; i++);

	process.send('finished: ' + job);
});