'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($q, $http, locationService) {
	this.addCrag = function(cragData) {
		$http.post('/api/rockClimb', cragData);
	};

	this.getNear = function() {
		var currentMarkers = [];
		var deferred = $q.defer();
		locationService.getCoords().then(function(coords) {
			console.log(coords);
			$http.get('api/rockClimb?lon=' + coords.lon + '&lat=' + coords.lat).then(function(resp) {
				console.log(resp);
				currentMarkers = [];
				var markerData = resp.data;
				function NewMarker(name, lat, lon, difficult, trailHead, id) {
					this.name = name;
					this.id = id;
					this.coords = {
						latitude: lat,
						longitude: lon
					};
					this.difficult = difficult;
					this.trailHead = trailHead;
				};
				for (var i = 0; i < markerData.length; i++) {
					var cragMarker = new NewMarker(markerData[i].name, markerData[i].loc[1], markerData[i].loc[0], markerData[i].difficult, markerData[i].trailHead, i);
					currentMarkers.push(cragMarker);
				};
				console.log("about to resolve")
				deferred.resolve(currentMarkers);
			},
			function(err) {
				deferred.reject(err);
			});
		});
		return deferred.promise;
	};
});


