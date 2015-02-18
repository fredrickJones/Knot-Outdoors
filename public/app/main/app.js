'use strict';
var app = angular.module('knotOutdoors', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		// .when('/', {
		// 	temlateUrl: '../../index.html',
		// 	controller: 'mainCtrl'
		// })
		when('/', {
			temlateUrl: '../views/rockClimbing/rockView.html',
			controller: 'rockCtrl'
		})
		.when('/login', {
			temlateUrl: '../views/login/loginView.html',
			controller: 'loginCtrl',
			resolve: {
				oAuth: function(loginService) {
					return loginService.list();
				}
			}
		})
		.when('/dashboard', {
			temlateUrl: '../views/dashboard/dashboardView.html',
			controller: 'dashboardCtrl',
			resolve: {
				user: function(userService, $route) {
					return userService.get($route.current.params.id);
				}
			}
		})
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
		// .when('/rock-climbing', {
		// 	temlateUrl: '/temlate/rock.html',
		// 	controller: 'rockCtrl'
		// })
		.otherwise({
			redirectTo: '/'
		});
});