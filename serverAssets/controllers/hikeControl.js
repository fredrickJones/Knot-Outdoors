'use strict';
var Trail = require('./../models/hikeModel');

module.exports = {
	create: function(req, res){
		var coords = [req.body.lon, req.body.lat];
		req.body.loc = coords;
		// console.log(req.body);
		var newTrail = new Trail(req.body);
		newTrail.save(function(err, trail) {
			if(err) {
				// console.log(err);
				return res.status(500).end();
			} else {
				return res.status(200).json(trail);
			}
		});
	},
	getTrails: function(req, res) {
		// console.log(req.query);
		Trail.find({
			// loc: [-111.666271, 40.450810]
			loc: {
				$near: [Number(req.query.lon), Number(req.query.lat)],
				$maxDistance: 0.724637
			}
		}, function(err, response) {
				if(err) {
					// console.log(err);
					return res.status(500).json(err);
				} else {
					// console.log(response);
					res.status(200).json(response);
				}
		}).limit(100);
	}
};


