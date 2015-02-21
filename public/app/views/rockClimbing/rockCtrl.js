'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope, rockService, locationService, uiGmapGoogleMapApi) {  //<--injeckt crags from app.js resolve
	$scope.centerMap = centerMap;
	$scope.getAllCrags = getMarkers;
	$scope.viewCragData = function(name, latitude, longitude, dificulty, author, temp, weather) {
		// console.log($scope.rockClimbing);
		$scope.name = name;
		$scope.dificulty = dificulty;
		$scope.latitude = latitude;
		$scope.longitude = longitude;
		weatherService.getWeather().then(function(temp, weather) {
 			console.log(weather);
			$scope.temp = temp.temp;
			$scope.weather = temp.weather;
		});
	};

	function centerMap() {
		var geo = navigator.geolocation;
		var success = function(position) {
			$scope.map = {
				center: {
					latitude: position.coords.latitude,
					longitude: poition.coords.longitude
				},
				zoom: 12
			};
		};
		var error = function(err) {
			alert('Geolocation failed ' + err);
		};
		var settings = {
			enableHighAccuracy: true
		};
		geo.getCurrentPosition(success, error, settings);
	};

	function getMarkers() {
		$scope.rockClimbing = rockService.getAllCrags();
	};

	$scope.map = {
		center: {
			latitude: 40,
			longitude: -111
		},
		zoom: 12
	};
	$scope.mapOptions = {
		scrollWheel: false
	};

	//$scope.rockClimbing = rockService.getAllCrags(); // <-- add the function that gets all crags from database

});


