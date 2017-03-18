var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanproject';

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
	console.log("Moogose connected to" + dburl);
});

mongoose.connection.on('disconnected', function() {
	console.log("Moogose disconnected");
});

mongoose.connection.on('error', function(err) {
	console.log("Moogose connection error" + err);
});