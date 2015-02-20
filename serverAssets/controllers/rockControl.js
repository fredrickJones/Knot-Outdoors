'use strict';
var crag = require('./../models/rockModel');

module.exports = {
	post: function(req, res){
		crag.create(req.body, function(err, results){
			if(err) {
				console.log(err);
				res.status(500).json(err);
			} else {
				res.status(200).json(results);
			}
		});
	},
	getAll: function(req, res){
		crag.find(function(err, response){
			if(err){
				console.log(err);
				res.status(500).json(err);
			} else {
				res.status(200).json(response);
			}
		});
	}
};


