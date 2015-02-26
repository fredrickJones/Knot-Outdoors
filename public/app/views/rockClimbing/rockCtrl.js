'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($q, $scope, rockService, locationService, uiGmapGoogleMapApi, crags, center) {
	$scope.crags = crags;
	// console.log(crags);
	$scope.map = center;
	console.log(center);
	$scope.userPin = {
		id: "user",
		coords: {
			latitude: center.latitude,
			longitude: center.longitude
		},
		url: 'images/user-marker.png'
	}

	$scope.viewCragData = function(name, lat, lon, diff) {
		// console.log($scope.rockClimbing);
		$scope.name = name;
		$scope.difficulty = diff;
		$scope.latitude = lat;
		$scope.longitude = lon;
	};

	$scope.map = {
		center: center,
		zoom: 13
	}

	$scope.showWeather = true;
	$scope.weatherOptions = {
		temperatureUnits: 'TemperatureUnit.FAHRENHEIT'
	};
});


