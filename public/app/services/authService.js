'use strict';
var app = angular.module('knotOutdoors');

app.service('authService', function($http){
	var user = {};

	this.updateUser = function(){
		$http.get('/auth/me').then(function(res){
			user = res.data;
			console.log('User updated: ', user);
			return user;
		})
	};

	this.getUser = function(){
		return user;
	};

	this.logout = function(){
		$http.get('/auth/logout').then(function(res){
			return res.data;
		});
	};
});


