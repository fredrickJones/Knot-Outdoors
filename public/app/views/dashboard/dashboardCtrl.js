'use strict';
var app = angular.module('knotOutdoors');

app.controller('dashboardCtrl', function($scope, uiGmapGoogleMapApi, dashboardService, crags) {
	$scope.buttonStatus = 'Add Crag';

	$scope.addCrag = function() {
		$scope.buttonStatus = "Adding Crag...";
		dashboardService.addCrag().then(function(data){
			$scope.pins.$add(data).then(function(){
				$location.path('/rock-climbing');
				$scope.inputActivity = '';
				$scope.inputSpot = '';
				$scope.inputDescription = '';
				$scope.inputAuthor = '';
				$scope.buttonStatus = "Add Location";
			})
		})
	};
});


