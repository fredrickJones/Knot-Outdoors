'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($q, $scope, rockService, locationService, uiGmapGoogleMapApi, crags, center) {  //<--injeckt crags from app.js resolve
	$scope.crags = crags;
	console.log(crags)

	$scope.viewCragData = function(name, lat, lon, diff) {
		// console.log($scope.rockClimbing);
		$scope.name = name;
		$scope.difficulty = diff;
		$scope.latitude = lat;
		$scope.longitude = lon;
	};
	$scope.map = {
		center: center,
		zoom: 8
	}

	// $scope.centerMap = function() {
	// 	var deferred = $q.defer();
	// 	// console.log(locationService.getCoords());
	// 	$scope.map = locationService.getCoords();
	// };

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
	//$scope.getCrags();
});

// db.crags.find({loc: {$near: [40, -111]}, minDistance: 0, maxDistance: 25000})


