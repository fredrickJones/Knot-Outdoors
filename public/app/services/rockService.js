'use strict';
var app = angular.module('knotOutdoors');

app.service('rockService', function($http, authService){
	this.getAll = function(){
		$http.get('/api/crags').then(function(res){
			return res.data;
		});
	};

	// this.addToMap = function(item){
	// 	var user = authService.getUser();
	// 	var cart = user.cart.slice(0);
	// 	cart.push(item);
	// 	return $http({
	// 		method: 'PUT',
	// 		url: '/api/users/' + user._id,
	// 		data: { cart: cart }
	// 	}).then(function(res){
	// 		return authService.updateUser()
	// 			.then(function(res){
	// 				return 'Cart updated Successfully!';
	// 			})
	// 	})
	// }
});