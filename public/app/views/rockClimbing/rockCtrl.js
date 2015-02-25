'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope, rockService, locationService, uiGmapGoogleMapApi/*, crags*/) {  //<--injeckt crags from app.js resolve
	$scope.getCrags = getCrags;

	$scope.viewCragData = function(name, lat, lon, diff) {
		// console.log($scope.rockClimbing);
		$scope.name = name;
		$scope.difficulty = diff;
		$scope.latitude = lat;
		$scope.longitude = lon;
	};

	$scope.centerMap = function() {
		// console.log(locationService.getCoords());
		$scope.map = locationService.getCoords();
	};

	function getCrags() {
		$scope.crags = rockService.getNear();
		// .then(function(resp) {
		// 	$scope.crags = resp;
		// });
	};

	// $scope.showWeather = true;
	// $scope.weatherOptions = {
	// 	temperatureUnits: 'TemperatureUnit.FAHRENHEIT'
	// };
	$scope.getCrags();
});

// db.crags.find({loc: {$near: [40, -111]}, minDistance: 0, maxDistance: 25000})


