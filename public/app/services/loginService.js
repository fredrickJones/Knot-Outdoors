'use strict';
var app = angular.module('knotOutdoors');

app.service('loginService', function($q, $http, $rootScope, $location) {
	var user = '';

	this.getUser = function() {
		$http.get('/api/currentUser').then(function(res) {
			// console.log(res);
			user = res.data;
			$rootScope.$broadcast('updateUser');
		});
	};
	this.getUser();

	this.returnUser = function() {
		// if(!user){
		// 	$location.path('/');
		// }
		return user;
	};
});


