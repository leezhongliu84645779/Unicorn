var dbconnection = require('../data/dbconnection.js');


module.exports.userVisitHistory = function(req, res) {
	var db = dbconnection.get();
	var collection = db.collection('ts_history');
	collection
		.find({}).toArray(function(err, doc){
			var output = [];
			var arrayLength = doc.length;
			for (var i = 0; i < arrayLength; i++) {
    			output.push(doc[i]["timestamp"]);
			}
			res
				.status(200)
				.send(output);
		});
};

module.exports.singleUserCurVisit = function(req, res) {
	var db = dbconnection.get();
	var collection = db.collection('ts_history');
	var cur_time = new Date().getTime();
	var user = req.query["user"];
	if (user) {
		var newObject = {user : cur_time, timestamp : cur_time};
		collection.insertOne(newObject);
	} else{ 
		var newObject = {timestamp : cur_time};
		collection.insertOne(newObject);
	}
	res
		.status(200)
		.json( {"timestamp" : cur_time} );
};