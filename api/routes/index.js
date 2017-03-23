var express = require('express');
var router = express.Router();
var visit = require('../controllers/visits.controllers.js');
var session = require('../controllers/session.controllers.js');
var chat =  require('../controllers/chat.controllers.js');

router
	.route('/time')
	.get(visit.singleUserCurVisit);

router
	.route('/history')
	.get(visit.userVisitHistory);

router
	.route('/chat')
	.get(chat.userChatPage);

router
	.route('/signup')
	.get(session.signupPage);

router
	.route('/signup/new')
	.post(session.addOneUser);

module.exports = router;