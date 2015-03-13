'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope, rockService, locationService, uiGmapGoogleMapApi, crags, center) {  //crags & center comes from app.js
	$scope.crags = crags;
	console.log(crags);
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
		// console.log(location);
		$scope.userCoordsLat = location.latitude;
		$scope.userCoordsLon = location.longitude;
	};
	$scope.hideUserLoc = function() {
		$scope.windowOptions.visible = false;
	};


	$scope.map = {
		center: center,
		zoom: 10,
		bounds: {}
	};
	$scope.map.options = {
		scrollwheel: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.TERRAIN]
		},
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		zoomControl: true,
		zoomControlOptions: {
			style: 'SMALL'
		}
	};


	$scope.$watch(function() {
		return $scope.map.bounds;
	}, function() {
		$scope.crags = $scope.crags;
	}, true);
	$scope.cluster = {
		maxZoom: 13,
		minimumClusterSize: 4
	};


	$scope.showWeather = true;
	$scope.weatherOptions = {
		temperatureUnits: 'TemperatureUnit.FAHRENHEIT'
	};
});


