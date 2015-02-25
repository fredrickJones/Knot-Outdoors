'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($q, $http, locationService) {
	this.addCrag = function(cragData) {
		$http.post('/api/rockClimb', cragData);
	};

	this.getNear = function() {
		// var currentMarkers = [];
		var deferred = $q.defer();
		locationService.getCoords().then(function(coords) {
			// console.log(coords);
			$http.get('api/rockClimb?lon=' + coords.D + '&lat=' + coords.k).then(function(resp) {
				console.log(resp);
				// currentMarkers = [];
				// var markerData = resp.data;
				// for (var i = 0; i < markerData.length; i++) {
				// 	var cragMarker = new NewMarker(markerData[i].name, markerData[i].loc[1], markerData[i].loc[0], markerData[i].difficult, markerData[i].trailHead);
				// 	currentMarkers.push(cragMarker);
				// };
				deferred.resolve(resp.data);
			},
			function(err) {
				deferred.reject(err);
			});
		});
		return deferred.promise;
	};
});


