'use strict';
var app = angular.module('knotOutdoors');

app.controller('dashboardCtrl', function($scope, uiGmapGoogleMapApi, locationService, dashboardService, $location) {
	$scope.buttonStatus = 'Add Crag';
	
	$scope.addCrag = function() {
		$scope.buttonStatus = "Adding Crag...";
		locationService.getCoords().then(function(data){
			$scope.buttonStatus = "Adding Location...";
			$scope.pins.$add(data).then(function(){
				alert('Daybreak location added!');
				$location.path('/explore');
				$scope.inputActivity = '';
				$scope.inputSpot = '';
				$scope.inputDescription = '';
				$scope.inputAuthor = '';
				$scope.buttonStatus = "Add Location";
			})
		})
	};
});


