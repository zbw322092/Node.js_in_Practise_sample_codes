var myClass = require('./moduleExports');
var module2 = require('./moduleExports2');
// just delete the module cache, required modules can be used as usual.
delete require.cache[require.resolve('./moduleExports2')]; 

console.log(myClass.method());
console.log(module2.method());
console.log(module2.method2());

var fullyName = require.resolve('./moduleExports');
console.log(fullyName);
