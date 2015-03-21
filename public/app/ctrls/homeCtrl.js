'use strict';
var app = angular.module('knotOutdoors')

app.controller('homeCtrl', function($scope, loginService, locationService, selectionService, rockService, campService, hikeService, uiGmapGoogleMapApi, center, crags, sites, trails) {

// MARKER STUFF
	$scope.adventures = [];
	console.log($scope.adventures);

	$scope.$on('updateSelection', function() {
		var selection = selectionService.getSelection();
		switch(selection) {
			case 'camping':
				$scope.adventures = sites;
				break;
			case 'rockClimbing':
				$scope.adventures = crags;
				break;
			case 'hiking':
				$scope.adventures = trails;
				break;
			default:
				$scope.adventures = [];
				break;
		};
	});


// USER STUFF
	$scope.userPin = {
		id: 'user',
		coords: {
			latitude: center.latitude,
			longitude: center.longitude
		},
		url: 'images/user-marker.png'
	};

	$scope.userCoordsLat = $scope.userPin.coords.latitude.toFixed(6);
	$scope.userCoordsLon = $scope.userPin.coords.longitude.toFixed(6);


// MAP STUFF
	$scope.map = center;

	$scope.windowOptions = {
		show: false
	};
	$scope.onClick = function() {
		$scope.windowOptions.show = !$scope.windowOptions.show;
	};
	$scope.closeClick = function() {
		$scope.windowOptions.show = false;
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
		$scope.adventures = $scope.adventures;
	}, true);
	$scope.cluster = {
		maxZoom: 14
	};

	$scope.showWeather = true;
	$scope.weatherOptions = {
		temperatureUnits: 'TemperatureUnit.FAHRENHEIT'
	};
});