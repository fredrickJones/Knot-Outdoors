'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($http, locationService){
	this.addCrag = function(cragData) {
		$http.post('/api/rockClimb', cragData);
	};

	this.getNear = function() {
		locationService.getCoords().then(function(location){
			$http.get('api/rockClimb?' + location); //lon=' + coords.longitude + '&lat=' + coords.latitude);
		});
	};
	// resolve: {  //<--this will load markers on load
			// 	crags: function(rockService){  
			// 		return rockService.getNear();
			// 	}
			// }
});


