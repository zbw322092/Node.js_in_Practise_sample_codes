var path = require('path');

console.log('dirname: ', __dirname); // point to the fully resolved locations of the current script
console.log('filename: ', __filename);

console.log(path.join('a','b','c')); // result: a/b/c
console.log(path.join('a/','/b','/c')); // result: a/b/c
console.log(path.join('/a/','/b/','/c/')); // result: /a/b/c/
console.log(path.join('a/','./b','../c')); // result: a/c
console.log(path.join('a/','./b','./c')); // result: a/b/c
console.log(path.join('a/','./b','../../c')); // c
console.log(path.join('a/','./b','../../../c')); // ../c