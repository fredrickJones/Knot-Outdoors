'use strict';
var Crag = require('./../models/rockModel');

module.exports = {
	create: function(req, res){
		var coords = [req.body.lon, req.body.lat];
		req.body.loc = coords;
		// console.log(req.body);
		var newCrag = new Crag(req.body);
		newCrag.save(function(err, crag) {
			if(err) {
				// console.log(err);
				return res.status(500).end();
			} else {
				return res.status(200).json(crag);
			}
		});
	},
	getCrags: function(req, res) {
		// console.log(req.query);
		Crag.find({
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


