'use strict';
var app = angular.module('knotOutdoors');

app.controller('campingCtrl', function($scope, campService, locationService, uiGmapGoogleMapApi, /*sites,*/ center) {  //sites & center comes from app.js
	$scope.sites = sites;
	// console.log(sites);
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

	$scope.viewSiteData = function(name, price) {
		$scope.siteName = name;
		$scope.sitePrice = price;
	};
	$scope.hideSiteData = function() {
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
		zoom: 12
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


