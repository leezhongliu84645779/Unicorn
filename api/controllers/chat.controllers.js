var server = require('../../app.js');
var path = require('path')
module.exports.userChatPage = function(req, res) {
	console.log("something really really weird happen, making me scared");
	res.sendFile(path.resolve(__dirname + '../../../public/chat.html'));
}