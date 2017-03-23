require('./api/data/db.js');
require('./api/data/users.model.js');
var connections = [];
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var server = app.listen(3000);
var socket = require('socket.io');
var io = require('socket.io').listen(server);
var connection = require('./api/socket.js')(express, io.sockets);
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');


app.set('trust proxy', 1)
app.use(cookieSession({
	name: 'session',
	keys: ["hahaunicorncouldbemybestprojectever"],
	maxAge: 24 * 60 * 60 * 1000,
	signed: true,
}))
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); // redirect CSS bootstrap
app.set('port', 3000);
app.use('/', routes);
