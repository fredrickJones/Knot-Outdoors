'use strict';
var app = angular.module('knotOutdoors')

app.controller('mainCtrl', function($scope, loginService) {
	$scope.user = loginService.returnUser();

	$scope.$on('updateUser', function() {
		$scope.user = loginService.returnUser();
		// console.log($scope.user)
	});
});


