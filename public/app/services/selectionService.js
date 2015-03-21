'use strict';
var app = angular.module('knotOutdoors');

app.service('selectionService', function($rootScope) {
	var selection = '';
	this.setSelection = function(str) {
		selection = str;
		$rootScope.$broadcast('updateSelection');
	};
	this.getSelection = function() {
		return selection;
	}
});