'use strict';
var app = angular.module('knotOutdoors');

app.service('locationService', function($http, uiGmapGoogleMapApi) {
	this.getCoords = function() {
		var geolocate;
		var mapOptions = {
			center: geolocate,
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};
		// debugger;
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		if (!!navigator.geolocation) {
			marker = new google.maps.Marker({
				position: geolocate,
				map: map,
				icon: {
					path: google.maps.SymbolPath.STAR,
					scale: 10
				},
				fillColor: 'grey',
				fillOpacity: 0.8,
				draggable: false
			});
			navigator.geolocation.watchPosition(function(position) {
				geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				map.setCenter(geolocate);
			});
		} else {
			document.getElementById('map-canvas').innerHTML = 'No Geolocation Support.';
		}
		return map;
	};



	// this.getWeather = function(lat, lon) {
	// 	var deferred = $q.defer();
	// 	$http.get('/weather?lat' + lat.toFixed(0) + '&lon=' + lon.tofixed(0)).then(function(data) {
	// 			deferred.resolve(data.data);
	// 	});
	// 	return deferred.promise;
	// };
});


