var dns = require('dns');

dns.lookup('www.google.com', function(err, address) {
	if (err) {
		console.error('Error:', err);
	}

	console.log('Addresses:', address);
});

dns.resolve('www.baidu.com', function(err, addresses) {
	if (err) {
		console.error(err);
	}

	console.log('Addresses:', addresses);
});