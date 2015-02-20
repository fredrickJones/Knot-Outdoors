'use strict';
var app = angular.module('knotOutdoors');

app.service('locationService', function($q, $http) {
	this.getCoords = function() {
		navigator.geolocation.getCurrentPosition(function(position) {
			obj.coords.latitude = position.coords.latitude;
			obj.coords.longitude = position.coords.longitude;
			dfd.resolve(obj);
			}, function(error){
				console.log(err);
		});

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


