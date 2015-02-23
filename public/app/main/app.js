'use strict';
var app = angular.module('knotOutdoors', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './app/views/rockClimbing/rockView.html',
			controller: 'rockCtrl'//,
			// resolve: {  //<--this will load markers on load
			// 	crags: function(rockService){  
			// 		return rockService.getNear();
			// 	}
			// }
		})
		.when('/login', {
			templateUrl: './app/views/login/loginView.html',
			controller: 'loginCtrl'
		})
		.when('/dashboard', {
			templateUrl: './app/views/dashboard/dashboardView.html',
			controller: 'dashboardCtrl'//,
			// resolve: {
			// 	user: function(userService, $route) {
			// 		return userService.get($route.current.params.id);
			// 	}
			// }
		})
		// .when('/rock-climbing', {
		// 	templateUrl: './views/rockClimbing/rockView.html',
		// 	controller: 'rockCtrl'
		// })
		// .when('/camping', {
		// 	temlateUrl: '/temlate/camping.html',
		// 	controller: 'campingCtrl'
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


