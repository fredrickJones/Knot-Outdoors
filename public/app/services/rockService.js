'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($http, $q, locationService) {
	this.addCrag = function(cragData) {
		$http.post('/api/rockClimb', cragData);
	};

	this.getNear = function() {
		var deferred = $q.defer();
		locationService.getCoords().then(function(coords) {
			$http.get('api/rockClimb?lon=' + coords.longitude + '&lat=' + coords.latitude).then(function(resp) {
				// var marker = new google.maps.Marker({
				// 	position: geolocate,
				// 	map: map,
				// 	icon: {
				// 		path: google.maps.SymbolPath.STAR,
				// 		scale: 10
				// 	},
				// 	fillColor: 'blue',
				// 	fillOpacity: 0.8,
				// 	draggable: false
				// });
				console.log(resp);
				deferred.resolve(resp);
			},
			function(err) {
				deferred.reject(err);
			});
		});
		return deferred.promise;
	};
});


