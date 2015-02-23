'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($http, locationService){
	this.addCrag = function(cragData) {
		$http.put('/api/rockClimbing', {cragData});
	};

	this.getNear = function() {
		$http.get('api/rockClimbing' {})
	} resolve: {  //<--this will load markers on load
			// 	crags: function(rockService){  
			// 		return rockService.getNear();
			// 	}
			// }
});


