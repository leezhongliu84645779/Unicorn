var bcrypt = require('bcrypt');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports.signupPage = function(req, res) {
	res.sendFile(path.resolve(__dirname + '../../../public/signup.html'));
}


module.exports.addOneUser = function(req, res) {
	console.log(req.body);
	var password = req.body['password'];
	var encrypted_password = hashPassword(password);
	User.create({
		name : req.body['name'],
		username: req.body['username'],
		email: req.body['email'],
		password: encrypted_password
	}, function(err, user) {
		if (err) {
			console.log("error creating user");
			res
				.status(404)
				.json(err);
		} else {
			console.log("user created", user);
			res
				.status(201)
				.json(user);
		}
	})
};

function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash
};