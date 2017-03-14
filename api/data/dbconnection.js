var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanproject';
var connection = null;

var open = function() {
	MongoClient.connect(dburl, function(err, db) {
		if (err) {
			console.log("DB connection failed");
			return;
		}
		connection = db;
		console.log("DB connection open", db);

	});
}

var get =function() {
	return connection;
};


module.exports = {
	open : open,
	get : get
};