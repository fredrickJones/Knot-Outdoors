'use strict';
var Q = require('q');

var User = require('./../models/userModel');

module.exports = {
	updateOrCreate: function(user){
		var deferred = Q.defer();
		User.findOne({ facebookId: user.id }, function(err, results){
			if(err) return deferred.reject(err);
			if(results){
				User.update({ _id: results._id }, {
					name: user.displayName,
					// picture: user._json.picture,
					gender: user._json.gender
				}, function(err, results){
					if(err){
						return deferred.reject(err);
					} else {
						deferred.resolve(results);
					}
				});
			} else {
				User.create({
					facebookId: user.id,
					name: user.displayName,
					// picture: user._json.picture,
					gender: user._json.gender
				}, function(err, results){
					if(err){
						return deferred.reject(err);
					} else {
						deferred.resolve(results);
					}
				});
			}
		});
		return deferred.promise;
	},
	getUser: function(id){
		var deferred = Q.defer();
		User.findOne({ facebookId: id }, function(err, results){
			if(err){
				deferred.reject(err);
			} else {
				deferred.resolve(results);
			}
		})
		return deferred.promise;
	},
	put: function(req, res){
		delete req.body._id;
		console.log(req.body)
		User.update({ _id: req.params.id }, req.body, function(err, results){
			console.log(err, results);
			if(err){
				res.status(500).json(err);
			} else {
				res.status(200).json(results);
			}
		});
	}
};