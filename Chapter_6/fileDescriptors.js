var fs = require('fs');

fs.writeSync(1, 'using fs.writeSync to write stdout \n');
fs.writeSync(2, 'using fs.writeSync to write stderr \n');

var fileDescriptor = fs.openSync('file.txt', 'a');
var fileDescriptor2 = fs.openSync('config.json', 'a');
console.log(fileDescriptor);
console.log(fileDescriptor2);