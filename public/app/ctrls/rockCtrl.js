'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope, rockService, locationService, uiGmapGoogleMapApi, crags, center) {  //crags & center comes from app.js
	$scope.crags = crags;
	console.log(crags);
	$scope.map = center;
	// console.log(center);

	$scope.windowOptions = {
		show: false
	};
	$scope.onClick = function() {
		$scope.windowOptions.show = !$scope.windowOptions.show;
	};
	$scope.closeClick = function() {
		$scope.windowOptions.show = false;
	};
	$scope.title = 'happy happy happy';//$scope.crags.name + ', ' + $scope.crags.difficult + ', ' + $scope.crags.trailHead;


	$scope.userPin = {
		id: "user",
		coords: {
			latitude: center.latitude,
			longitude: center.longitude
		},
		url: 'images/user-marker.png'
	};

	$scope.userCoordsLat = $scope.userPin.coords.latitude.toFixed(6);
	$scope.userCoordsLon = $scope.userPin.coords.longitude.toFixed(6);

	
	$scope.$watch(function() {
		return $scope.map.bounds;
	}, function() {
		$scope.crags = $scope.crags;
	}, true);
	$scope.cluster = {
		maxZoom: 14
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


	$scope.showWeather = true;
	$scope.weatherOptions = {
		temperatureUnits: 'TemperatureUnit.FAHRENHEIT'
	};
});




// $scope.refreshMap = function () {
//     //optional param if you want to refresh you can pass null undefined or false or empty arg
//     $scope.map.control.refresh({latitude: 32.779680, longitude: -79.935493});
//     $scope.map.control.getGMap().setZoom(11);
//     return;
//   };

