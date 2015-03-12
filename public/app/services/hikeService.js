'use strict';
var app = angular.module('knotOutdoors');

app.service('hikeService', function($q, $http, locationService) {
	this.addHike = function(hikeData) {
		// console.log(hikeData);
		$http.post('/api/hiking', hikeData);
	};

	this.getNear = function() {
		var currentMarkers = [];
		var deferred = $q.defer();
		locationService.getCoords().then(function(coords) {
			// console.log(coords);
			$http.get('api/hiking?lon=' + coords.lon + '&lat=' + coords.lat).then(function(resp) {
				// console.log(resp);
				currentMarkers = [];
				var markerData = resp.data;
				function NewMarker(name, lat, lon, length, id, url) {
					this.name = name;
					this.id = id;
					this.coords = {
						latitude: lat,
						longitude: lon
					};
					this.length = length;
					this.url = url;
				};
				var url = 'images/location-marker.png';
				for (var i = 0; i < markerData.length; i++) {
					var siteMarker = new NewMarker(
						markerData[i].name,
						markerData[i].loc[1],
						markerData[i].loc[0],
						markerData[i].length,
						i,
						url
					);
					currentMarkers.push(siteMarker);
				};
				// console.log(currentMarkers);
				deferred.resolve(currentMarkers);
			}).catch(function(err) {
				deferred.reject(err);
			});
		});
		return deferred.promise;
	};
});


