var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	email : {
		type : String,
		required : true,
		unique : true
	},
	password :  {
		type : String,
		required : true
	},
	username : {
		type : String,
		required : true,
		unique : true
	},
	name : {
		type : String,
		required : true,
	}
});

mongoose.model('User', userSchema);
// module.exports = mongoose.model('User', userSchema);