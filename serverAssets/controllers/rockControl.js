'use strict';
var Crag = require('./../models/rockModel');

module.exports = {
	create: function(req, res){
		// console.log(req.body);
		var newCrag = new Crag(req.body);
		// console.log(newCrag);
		newCrag.save(function(err, crag) {
			if(err) {
				console.log(err);
				return res.status(500).end();
			} else {
				return res.status(200).json(crag);
			}
		});
	},
	getCrags: function(req, res) {
		console.log(req.query);
		Crag.find({
			loc: {
				$near: [Number(req.query.lon), Number(req.query.lat)],
				$maxDistance: 25
			}
		}, function(err, response) {
				if(err) {
					console.log(err);
					return res.status(500).json(err);
				} else {
					res.status(200).json(response);
				}
		});
	}
};


