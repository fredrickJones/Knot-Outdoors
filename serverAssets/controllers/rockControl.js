'use strict';
var Crag = require('./../models/rockModel');

module.exports = {
	create: function(req, res){
		var newCrag = new Crag(req.body);
		newCrag.save(function(err, crag) {
			if(err) {
				return res.status(500).end();
			} else {
				return res.status(200).json(crag);
			}
		});
	},
	getCrags: function(req, res) {
		Crag.find({
			location: {
				$near: {
					geometry: {type:'Point', coordinates: [user.currentLocation]},
					$minDistance: 0,
					$maxDistance: 85000
				}
			}
		}, function(err, response) {
			if(err) {
				return res.status(500).json(err);
			} else {
				res.status(200).json(response);
			}
		});
	}
};


