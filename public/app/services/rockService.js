'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($http, locationService){
	this.addCrag = function(cragData) {
		$http.post('/api/rockClimb', cragData);
	};

	this.getNear = function() {
		locationService.getCoords().then(function(coords){
			$http.get('api/rockClimb?lat='+coords.latitude+"&lon="+coords.longitude);
		});
	};
	// resolve: {  //<--this will load markers on load
			// 	crags: function(rockService){  
			// 		return rockService.getNear();
			// 	}
			// }
});


