'use strict';
var app = angular.module('knotOutdoors', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			temlateUrl: '/index.html',
			controller: 'mainCtrl'
		})
		.when('/login', {
			temlateUrl: '/temlate/login.html',
			controller: 'loginCtrl',
			resolve: {
				: function(loginService) {
					return loginService.list();
				}
			}
		})
		.when('/user/:id', {
			temlateUrl: '/temlate/user.html',
			controller: 'userCtrl',
			resolve: {
				user: function(userService, $route) {
					return userService.get($route.current.params.id);
				}
			}
		})
		.when('/camping', {
			temlateUrl: '/temlate/camping.html',
			controller: 'campingCtrl',
			resolve: {

			}
		})
		.when('/hiking', {
			temlateUrl: '/temlate/hiking.html',
			controller: 'hikingCtrl',
			resolve: {
				
			}
		})
		.when('/fishing', {
			temlateUrl: '/temlate/fishing.html',
			controller: 'fishingCtrl',
			resolve: {
				
			}
		})
		.when('/rock-climbing', {
			temlateUrl: '/temlate/rock.html',
			controller: 'rockCtrl',
			resolve: {
				
			}
		})
		.otherwise({
			redirectTo: '/'
		});
});