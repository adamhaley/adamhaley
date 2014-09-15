
/*
 * GET home page.
 */

exports.index = function(req, res){
	var data = require('../public/data/projects.json');

  	res.render('index', { title: 'Adam Haley',data: data });
};