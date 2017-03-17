require('./api/data/dbconnection.js').open();
var connections = [];
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var server = app.listen(3000);
var socket = require('socket.io');
var io = require('socket.io').listen(server);
var connection = require('./api/socket.js')(express, io.sockets);


app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); // redirect CSS bootstrap
app.set('port', 3000);
app.use('/', routes);
