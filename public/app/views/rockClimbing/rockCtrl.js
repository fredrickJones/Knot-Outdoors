'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope, rockService, locationService, uiGmapGoogleMapApi, crags, center) {
	$scope.crags = crags;
	// console.log(crags);
	$scope.map = center;
	// console.log(center);
	$scope.userPin = {
		id: "user",
		coords: {
			latitude: center.latitude,
			longitude: center.longitude
		},
		url: 'images/user-marker.png'
	};

	$scope.windowOptions = {
		visible: false
	};

	$scope.viewCragData = function(name, difficulty) {
		$scope.cragName = name;
		$scope.cragDifficulty = difficulty;
	};
	$scope.hideCragData = function() {
		$scope.windowOptions.visible = false;
	};
	$scope.viewUserLoc = function(location) {
		$scope.userLocation = location;
	};
	$scope.hideUserLoc = function() {
		$scope.windowOptions.visible = false;
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


