var express = require('express'),
	router = express.Router(),
	home = require('../controllers/home'),
	image = require('../controllers/image');

module.exports = function(app){
	router.get('/', home.index);
	router.get('/images/:image_id', image.index);
	router.get('/images/:image_id/like', image.like);
	router.get('/images/:image_id/comment', image.comment);
	app.use(router);
}