'use strict';
var app = angular.module('knotOutdoors', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './app/views/rockClimbing/rockView.html',
			controller: 'rockCtrl'
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