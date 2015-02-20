'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope, rockService, locationService, uiGmapGoogleMapApi) {
	var centerLatitude;
	var centerLongitude;

	//$scope.rockClimbing = rockService() // <-- add the function that gets all crags from database

	$scope.map = {
		center: {
			latitude: 39.828127,
			longitude: -98.579404
		},
		 zoom: 4
	};
	$scope.mapOptions = {
		scrollWheel: false
	};

	navigator.geolocation.getCurrentPosition(function(position) {
		centerLatitude = position.coords.latitude;
		centerLongitude = position.coords.longitude;
		$scope.map = {
			center: {
				latitude: centerLatitude,
				longitude: centerLongitude
			},
			zoom: 12
		};
	});
	$scope.viewCragData = function(name, latitude, longitude, dificulty, author, temp, weather) {
		console.log($scope.rockClimbing);
		$scope.name = name;
		$scope.dificulty = dificulty;
		$scope.latitude = latitude;
		$scope.longitude = longitude;
		$scope.author = author;
		weatherService.getWeather().then(function(temp, weather) {
 			console.log(weather);
			$scope.temp = temp.temp;
			$scope.weather = temp.weather;
		});
	};

});


