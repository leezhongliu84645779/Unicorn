// require('./instantHello');
// var goodbye = require('./talk/goodbye');
// var talk = require('./talk');

// talk.intro();
// talk.hello("Lee");
// goodbye();
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.set('port', 3000);

// app.get('/', function(req, res) {
// 	console.log("Get the homwpage");
// 	res
// 		.status(200)
// 		.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/json', function(req, res) {
	console.log("Get the json");
	res
		.status(200)
		.json({"josnDate" : true});
});

app.get('/file', function(req, res) {
	console.log("Get the json");
	res
		.status(200)
		.sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
	console.log('Magic happens on port ' + port);
});
