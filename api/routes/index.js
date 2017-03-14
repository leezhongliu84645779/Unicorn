var express = require('express');
var router = express.Router();
var visit = require('../controllers/visits.controllers.js');

router
	.route('/time')
	.get(visit.singleUserCurVisit);

router
	.route('/history')
	.get(visit.userVisitHistory);


module.exports = router;