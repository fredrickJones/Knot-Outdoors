'use strict';
var app = angular.module('knotOutdoors');

app.service('locationService', function($q, $http, uiGmapGoogleMapApi) {	
	this.getCoords = function(){
		var userMarker = [];
		// console.log("in service");
		var centerDfd = $q.defer();
		navigator.geolocation.getCurrentPosition(function(position) {
			centerDfd.resolve(
				{
					lat: position.coords.latitude,
					lon: position.coords.longitude
				});
			}, function(err) {

			}, {
				enableHighAccuracy: true
			});
		return centerDfd.promise;
	};

	this.getWeather = function(lat, lon) {
		var deferred = $q.defer();
		$http.get('/weather?lat' + lat.toFixed(0) + '&lon=' + lon.tofixed(0)).then(function(data) {
				deferred.resolve(data.data);
		});
		return deferred.promise;
	};
});


