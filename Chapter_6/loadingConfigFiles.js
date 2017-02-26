var fs = require('fs');
var chalk = require('chalk');
var requiredConfig = require('./config.js');

// asynchronous method to load config file
fs.readFile('./config.json', function(err, buf) {
	if (err) throw err;
	var config = JSON.parse(buf.toString());
	console.log(config);
});

try {
	var config2 = JSON.parse(fs.readFileSync('./config.json').toString());
	console.log(chalk.green('config2: '), config2);	
} catch(err) {
	console.log(err);
}

console.log(chalk.green('requiredConfig: '), requiredConfig);
