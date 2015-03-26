'use strict';
var Q = require('q');
var User = require('./../models/userModel');

module.exports = {
	updateOrCreate: function(user){
		console.log(user);
		var deferred = Q.defer();
		User.findOne({ id: user.id }, function(err, results){
			if(err) return deferred.reject(err);
			if(results){
				User.update({ id: results.id }, {
					name: user._json.name,
				}, function(err, results){
					if(err){
						return deferred.reject(err);
					} else {
						deferred.resolve(results);
					}
				});
			} else {
				User.create({
					provider: user.provider,
					id: user._json.id,
					name: user._json.name,
					gender: user._json.gender,
					locale: user._json.locale
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
		User.findOne({ id: id }, function(err, results){
			if(err){
				deferred.reject(err);
			} else {
				deferred.resolve(results);
			}
		})
		return deferred.promise;
	},
	addUser: function(req, res){
		delete req.body._id;
		console.log(req.body)
		User.update({ _id: req.params.id }, req.body, function(err, results){
			// console.log(err, results);
			if(err){
				res.status(500).json(err);
			} else {
				res.status(200).json(results);
			}
		});
	}
};


