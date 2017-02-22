var EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
	this.track = track;
	this.playing = false;

	for (var methodName in EventEmitter.prototype) {
		this[methodName] = EventEmitter.prototype[methodName];
	}
}

MusicPlayer.prototype = {
	toString: function() {
		if (this.playing) {
			return 'Now playing: ' + this.track;
		} else {
			return 'Stopped';
		}
	}
};

var musicPlayer = new MusicPlayer('Girl Talk - Still Here');

console.log(musicPlayer);

musicPlayer.on('play', function() {
	this.playing = true;
	console.log(this.toString());
});

setTimeout(function() {
	musicPlayer.emit('play');	
}, 2000);
