'use strict';
var app = angular.module('knotOutdoors');

app.service('locationService', function($q, $http, uiGmapGoogleMapApi) {


	// this.getCoords = function() {
	// 	var deferred = $q.defer();

	// 	var geolocate;
	// 	var marker;
	// 	// var mapOptions = {
	// 	// 	center: geolocate,
	// 	// 	zoom: 12,
	// 	// 	mapTypeId: google.maps.MapTypeId.TERRAIN
	// 	// };
	// 	if (!!navigator.geolocation) {
	// 		navigator.geolocation.watchPosition(function(position) {
	// 			// geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	// 			geolocate = {lat: position.coords.latitude, lon: position.coords.longitude};
	// 			// console.log(geolocate);
	// 			map.setCenter(geolocate);
	// 			deferred.resolve(geolocate);
	// 		});
	// 	} else {
	// 		// google.maps.Map('map-canvas').innerHTML = 'No Geolocation Support.';
	// 		// document.getElementById('map-canvas').innerHTML = 'No Geolocation Support.';
	// 		deferred.reject('No Geolocation Support.');
	// 	}
	// 	return deferred.promise
	// };
	
	this.getCoords = function(){
		console.log("in service");
		var centerDfd = $q.defer();
		navigator.geolocation.getCurrentPosition(function(position){
				console.log(position.coords);
				centerDfd.resolve({lat: position.coords.latitude, lon: position.coords.longitude})
			}, function(err){

			}, {
				enableHighAccuracy: true
			})
		return centerDfd.promise;
	}


	// this.getWeather = function(lat, lon) {
	// 	var deferred = $q.defer();
	// 	$http.get('/weather?lat' + lat.toFixed(0) + '&lon=' + lon.tofixed(0)).then(function(data) {
	// 			deferred.resolve(data.data);
	// 	});
	// 	return deferred.promise;
	// };
});


