'use strict';
var app = angular.module('knotOutdoors');

app.service('authService', function($http) {
	var user = {};

	this.updateUser = function(){
		$http.get('/auth/user/:id').then(function(res) {
			user = res.data;
			// console.log(user);
			return user;
		});
	};

	this.getUser = function() {
		return user;
	};
});


