process.argv.forEach((val, index) => {
	console.log(`${index}: ${val}`);
});

// execute  node processArgs.js one two=three four   in terminal
// 0: /usr/local/bin/node
// 1: /Users/bowenzhong/Documents/workspace/Node.js_in_Practise_sample_codes/Chapter_2/processArgs.js
// 2: one
// 3: two=three
// 4: four