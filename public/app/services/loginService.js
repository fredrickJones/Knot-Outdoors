'use strict';
var app = angular.module('knotOutdoors');

app.service('loginService', function($http, $rootScope) {
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
		return user;
	};

// THIS IS FROM CAHLAN'S MY-TODOS
	// this.updateUser = function(){
	// 	$http.get('/auth/me').then(function(res) {
	// 		user = res.data;
	// 		// console.log('User updated: ', user);
	// 		return user;
	// 	})
	// };

	// this.getUser = function() {
	// 	return user;
	// };
});


