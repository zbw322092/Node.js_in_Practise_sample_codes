var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var express = require('express');

// Connect version
// var app = new connect();

// app.use(serveStatic(__dirname));

// http.createServer(app).listen(3000);

// Express version
var app = express();

app.use(express.static(__dirname));
// virtual path prefix 
// app.use('/static', express.static(__dirname));

app.listen(3030);