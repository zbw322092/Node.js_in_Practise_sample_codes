process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
	process.stdout.write(text.toUpperCase());
});

var name = 'Bowen';
var person = {
	name: 'Hui',
	age: 26
};
console.log('Hello %s', name); // Hello Bowen
console.log('Hello %d', name); // Hello NaN
console.log('Hello %j', name); // Hello "Bowen"
console.log('Hello %j', person); // Hello {"name":"Hui","age":26}

console.error('some errors happpening here');

console.trace();