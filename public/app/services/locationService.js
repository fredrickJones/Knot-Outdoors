'use strict';
var app = angular.module('knotOutdoors');

app.service('locationService', function($q, $http, uiGmapGoogleMapApi) {
	var initialLocation;

	this.getCoords = function() {
		var myOptions = {
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.Terrain
		};
		var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

		// try HTML5 geolocation
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				map.setCenter(initialLocation);
			}, function() {
				handleNoGeolocation(true);
			});
		} else { // if the browser doesn't support geolocation
			handleNoGeolocation(false);
		}
	};

	function handleNoGeolocation(errorFlag) {
		if (errorFlag) {
			var content = 'Error: The Geolocation service failed.';
		} else {
			var content = 'Error: Your browser doesn\'t support geolocation.';
		}
		var options = {
			map: map,
			position: new google.maps.LatLng(60, 105),
			content: content
		};
		var infowindow = new google.maps.InfoWindow(options);
		map.setCenter(options.position);
	};

	// google.maps.event.addDomListener(window, 'load', getCoords);

	this.getWeather = function() {
		var weatherLatitude;
		var weatherLongitude;

		navigator.geolocation.getCurrentPosition(function(position) {
			weatherLatitude = position.coords.latitude;
			weatherLongitude = position.coords.longitude;
		});

		var defered = $q.defer();
		$http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + weatherLatitude + '&lon=' + weatherLongitude).then(function(data) {
			console.log(data);
			var obj = {
				temp: Math.round(((((data.data.main.temp - 273.15)*9)/5)+32)) + '˚F',
				weather: data.data.weather[0].description
			}
			defered.resolve(obj);
		});
		return defered.promise;
	}
});


