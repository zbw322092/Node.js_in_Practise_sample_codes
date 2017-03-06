var fs = require('fs');
var https = require('https');
var cheerio = require('cheerio');

https.get('https://www.manning.com', function (res) {

	var rawData;
	res.on('data', function(chunk) {
		// rawData += chunk;

		var $ = cheerio.load(chunk);
		var releases = $('.book-cover-item-title');

		releases.each(function(i) {
			console.log('New Realease: ', $(this).text());
		});

	});

	res.on('end', function() {
		// var $ = cheerio.load(rawData);
		// var releases = $('.book-cover-item-title');

		// releases.each(function(i) {
		// 	console.log('New Realease: ', $(this).text());
		// });
		console.log('done');

	});
});
