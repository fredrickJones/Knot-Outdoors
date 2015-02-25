'use strict';
var app = angular.module('knotOutdoors', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(function($routeProvider) {
	$routeProvider
		// .when('/', {
		// 	templateUrl: './app/views/home/homeView.html',
		// 	controller: 'homeCtrl'
		// })
		.when('/login', {
			templateUrl: './app/views/login/loginView.html',
			controller: 'loginCtrl'
		})
		.when('/dashboard', {
			templateUrl: './app/views/dashboard/dashboardView.html',
			controller: 'dashboardCtrl'
		})
		.when('/rock-climbing', {
			templateUrl: './app/views/rockClimbing/rockView.html',
			controller: 'rockCtrl',
			resolve: {  //<--this will load points on load
				crags: function(rockService){
					// console.log("Hi fred");
					return rockService.getNear();
				}
			}
		})
		// .when('/camping', {
		// 	temlateUrl: './app/views/camping/camping.html',
		// 	controller: 'campingCtrl',
		// 	resolve: {
		// 		sites: function(campService) {
		// 			return campService.getNear();
		// 		}
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
			redirectTo: '/rock-climbing'
		});
});

app.config(function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		key: 'AIzaSyAGhVPYglL71Y7AXoJBZUoHVYszan04PK4',
		v: '3.18',
 		libraries: 'weather,geometry,visualization'
	});
});


