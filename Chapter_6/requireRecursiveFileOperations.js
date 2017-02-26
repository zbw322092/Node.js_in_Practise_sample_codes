var finder = require('./recursiveFileOperations.js');

try {
	var results = finder.findSync(/file.*/, './root');
	console.log(results);
} catch(err) {
	console.error(err);
}