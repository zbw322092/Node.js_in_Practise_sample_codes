// not working now


var MessageBus = require('./messagebus');
var messageBus = new MessageBus();
// var jsdom = require('jsdom');
// var window = jsdom.jsdom().createWindow();
// var $ = require('jquery')(window);
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);


messageBus.on('message', function(msg) {
	$('#message').append('<p>' + msg + '</p>');
});

$(function() {
  messageBus.emit('message', 'Hello from example 2');
});