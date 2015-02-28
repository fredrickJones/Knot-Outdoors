'use strict';
var app = angular.module('knotOutdoors', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './app/views/home/homeView.html',
			controller: 'homeCtrl'
		})
		.when('/dashboard', {
			templateUrl: './app/views/dashboard/dashboardView.html',
			controller: 'dashboardCtrl',
			resolve: {
				user: function(loginService) {
					return loginService.returnUser();
				}
			}
		})
		.when('/rock-climbing', {
			templateUrl: './app/views/rockClimbing/rockView.html',
			controller: 'rockCtrl',
			resolve: {  //<--this will load points on load
				crags: function(rockService){
					// console.log("Hi fred");
					return rockService.getNear();
				},
				center: function(locationService, $q){
					var deferred = $q.defer()
					locationService.getCoords().then(function(coords){
						coords.latitude = coords.lat;
						coords.longitude = coords.lon;
						deferred.resolve(coords);
					})
					return deferred.promise;
				}
			}
		})
		// .when('/camping', {
		// 	temlateUrl: './app/views/camping/camping.html',
		// 	controller: 'campingCtrl',
		// 	resolve: {
		// 		sites: function(campService) {
		// 			return campService.getNear();
		// 		},
				// center: function(locationService, $q){
				// 	var deferred = $q.defer()
				// 	locationService.getCoords().then(function(coords){
				// 		coords.latitude = coords.lat;
				// 		coords.longitude = coords.lon;
				// 		deferred.resolve(coords);
				// 	})
				// 	return deferred.promise;
				// }
		// 	}
		// })
		// .when('/hiking', {
		// 	temlateUrl: '/temlate/hiking.html',
		// 	controller: 'hikingCtrl'
		// })
		// .when('/fishing', {
		// 	temlateUrl: '/temlate/fishing.html',
		// 	controller: 'fishingCtrl'
		// })
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


