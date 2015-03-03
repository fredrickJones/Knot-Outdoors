'use strict';
var app = angular.module('knotOutdoors');

app.controller('dashboardCtrl', function($scope, uiGmapGoogleMapApi, rockService) {
	$scope.submitted = false;
	$scope.addNewCrag = function(cragData) {
		console.log('bad news bears');
		if ($scope.crag_form.$valid) {
			rockService.addCrag(cragData);
		} else {
			$scope.crag_form.submitted = true;
		}
	};


	// $scope.master = {};
	// $scope.reset = function(form) {
	// 	if (form) {
	// 		form.$setPristine();
	// 		form.$setUntuched();
	// 	}
	// 	$scope.crag = angular.copy($scope.master);
	// };

	// $scope.reset();
});

app.directive('ngFocus', [function() {
	var FOCUS_CLASS = 'ng-focused';
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, ele, attrs, ctrl) {
			ctrl.$focused = false;
			ele.bind('focus', function(evt) {
				ele.addClass(FOCUS_CLASS);
				scope.$apply(function() {ctrl.$focused = true});
			}).bind('blur', function(evt) {
				ele.removeClass(FOCUS_CLASS);
				scope.$apply(function() {ctrl.$focused = false});

			});
		}
	}
}]);


