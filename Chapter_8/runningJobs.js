var http = require('http');
var makePool = require('./pooler.js');
var runJob = makePool('./worker.js');

http.createServer(function(req, res) {
	runJob('Some dummy job', function(err, data) {
		if (err)
			return res.end('got an error:' + err.message);
		res.end(data);
	});
}).listen(3000);