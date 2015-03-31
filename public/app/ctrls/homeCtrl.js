'use strict';
var app = angular.module('knotOutdoors')

app.controller('homeCtrl', function($scope, loginService, locationService, selectionService, rockService, campService, hikeService, uiGmapGoogleMapApi, center, crags, sites, trails) {

// MARKER STUFF
	$scope.adventures = [];
	// console.log($scope.adventures);

	$scope.windowOptions = {
		show: false
	};
	$scope.onClick = function() {
		$scope.windowOptions.show = !$scope.windowOptions.show;
	};
	$scope.closeClick = function() {
		$scope.windowOptions.show = false;
	};

	$scope.$on('updateSelection', function() {
		var selection = selectionService.getSelection();
		switch(selection) {
			case 'camping':
				$scope.adventures = sites;
				// $scope.title = sites.name;
				// console.log($scope.adventures);
				break;
			case 'rockClimbing':
				$scope.adventures = crags;
				// $scope.title = crags.name;
				// console.log($scope.adventures);
				break;
			case 'hiking':
				$scope.adventures = trails;
				// console.log($scope.adventures);
				break;
			default:
				$scope.adventures = sites + crags + trails;
				// console.log($scope.adventures);
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

	$scope.userTitle = $scope.userPin.coords.latitude.toFixed(6) + ', ' + $scope.userPin.coords.longitude.toFixed(6);


// MAP STUFF
	$scope.map = {
		center: center,
		zoom: 10,
		bounds: {}
	};
	$scope.map.option = {
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