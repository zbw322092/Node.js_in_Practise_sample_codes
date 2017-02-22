var util = require('util');
var events = require('events');

var AudioDevice = {
	play: function(track) {
		console.log('Track now playing:', track);
	},
	stop: function() {

	}
};

function MusicPlayer() {
	this.playing = false;
	events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer();
console.log(musicPlayer);
console.log(MusicPlayer.super_);

function play(track) {
  this.playing = true;
  AudioDevice.play(track);
}

musicPlayer.on('play', play);
// musicPlayer.removeListener('play', play);

musicPlayer.on('stop', function() {
	this.playing = false;
	AudioDevice.stop();
});

musicPlayer.emit('play', 'The Roots - The Fire');

setTimeout(function() {
	musicPlayer.emit('stop');
}, 1000);

