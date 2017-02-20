// Read from stdin so the program will run until CTRL-C is pressed or it’s killed.
process.stdin.resume();
// The SIGHUP signal is sent to a process when its controlling terminal is closed.
process.on('SIGHUP', function() {
	console.log('Reloading configuration...');
});

console.log('PID: ', process.pid);