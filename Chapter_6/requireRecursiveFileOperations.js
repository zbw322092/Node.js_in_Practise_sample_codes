var finder = require('./recursiveFileOperations.js');

try {
	var results = finder.findSync(/file.*/, './root');
	console.log(results);
} catch(err) {
	console.error(err);
}


finder.find(/file*/, './root', function (err, results) {
  if (err) return console.error(err);
  console.log('async version: ', results);
});