'use strict';
var app = angular.module('knotOutdoors', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './app/views/homeView.html',
			controller: 'homeCtrl',
			resolve: {
				center: function(locationService, $q){
					var deferred = $q.defer()
					locationService.getCoords().then(function(coords){
						coords.latitude = coords.lat;
						coords.longitude = coords.lon;
						deferred.resolve(coords);
					})
					return deferred.promise;
				},
				crags: function(rockService) {  //<--this will load points on load
					return rockService.getNear();
				},
				sites: function(campService) {  //<--this will load points on load
					return campService.getNear();
				},
				trails: function(hikeService) {  //<--this will load points on load
					return hikeService.getNear();
				}
			}
		})
		.when('/dashboard', {
			templateUrl: './app/views/dashboardView.html',
			controller: 'dashboardCtrl',
			resolve: {
				user: function(loginService) {
					return loginService.returnUser();
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.config(function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		key: 'AIzaSyAGhVPYglL71Y7AXoJBZUoHVYszan04PK4',
		v: '3.17',
 		libraries: 'weather,geometry,visualization'
	});
});


