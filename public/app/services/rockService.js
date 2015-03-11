'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($q, $http, locationService) {
	this.addCrag = function(cragData) {
		console.log(cragData);
		$http.post('/api/rockClimb', cragData);
	};

	this.getNear = function() {
		var currentMarkers = [];
		var deferred = $q.defer();
		locationService.getCoords().then(function(coords) {
			// console.log(coords);
			$http.get('api/rockClimb?lon=' + coords.lon + '&lat=' + coords.lat).then(function(resp) {
				// console.log(resp);
				currentMarkers = [];
				var markerData = resp.data;
				function NewMarker(name, lat, lon, difficult, trailHead, id, url) {
					this.name = name;
					this.id = id;
					this.coords = {
						latitude: lat,
						longitude: lon
					};
					this.difficult = difficult;
					this.trailHead = trailHead;
					this.url = url;
				};
				var url = 'images/location-marker.png';
				for (var i = 0; i < markerData.length; i++) {
					var cragMarker = new NewMarker(markerData[i].name, markerData[i].coords[1], markerData[i].coords[0], markerData[i].difficult, markerData[i].trailHead, i, url);
					currentMarkers.push(cragMarker);
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


