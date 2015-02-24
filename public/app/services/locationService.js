'use strict';
var app = angular.module('knotOutdoors');

app.service('locationService', function($q, $http) {
	this.getCoords = function() {
		var dfd = $q.defer();
		navigator.geolocation.getCurrentPosition(function(position) {
			dfd.resolve(position.coords);
			}, function(error){
				console.log(err);
		}, {enableHighAccuracy: true});
		return dfd.promise;
	};

	this.getWeather = function() {
		var weatherLatitude;
		var weatherLongitude;

		navigator.geolocation.getCurrentPosition(function(position) {
			weatherLatitude = position.coords.latitude;
			weatherLongitude = position.coords.longitude;
		});

		var dfd = $q.defer();
		$http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + weatherLatitude + '&lon=' + weatherLongitude).then(function(data) {
			console.log(data);
			var obj = {
				temp: Math.round(((((data.data.main.temp - 273.15)*9)/5)+32)) + '˚F',
				weather: data.data.weather[0].description
			}
			dfd.resolve(obj);
		});
		return dfd.promise;
	}
});


