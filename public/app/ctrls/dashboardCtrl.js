'use strict';
var app = angular.module('knotOutdoors');

app.controller('dashboardCtrl', function($scope, uiGmapGoogleMapApi, rockService, campService, hikeService) {
	$scope.submitted = false;
	$scope.addNewCrag = function(cragData) {
		// console.log(cragData);
		// rockService.addCrag(cragData);
		if ($scope.crag_form.$valid) {
			rockService.addCrag(cragData);
		} else {
			$scope.crag_form.submitted = true;
			// $scope.crag.name = '';
			// $scope.crag.loc[1] = '';
			// $scope.crag.loc[0] = '';
			// $scope.crag.trailHead = '';
			// $scope.crag.difficult = '';
		}
	};

	$scope.addNewSite = function(siteData) {
		// console.log(siteData);
		// campService.addSite(siteData);
		if ($scope.site_form.$valid) {
			campService.addSite(siteData);
		} else {
			$scope.site_form.submitted = true;
			// $scope.site.name = '';
			// $scope.site.loc[1] = '';
			// $scope.site.loc[0] = '';
			// $scope.site.trailHead = '';
			// $scope.site.price = '';
		}
	};

	$scope.addNewTrail = function(trailData) {
		// console.log(hikeData);
		// hikeService.addHike(hikeData);
		if ($scope.trail_form.$valid) {
			hikeService.addHike(trailData);
		} else {
			$scope.trail_form.submitted = true;
			// $scope.hike.name = '';
			// $scope.hike.loc[1] = '';
			// $scope.hike.loc[0] = '';
			// $scope.hike.length = '';
		}
	};
});

// app.directive('ngFocus', [function() {
// 	var FOCUS_CLASS = 'ng-focused';
// 	return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		link: function(scope, ele, attrs, ctrl) {
// 			ctrl.$focused = false;
// 			ele.bind('focus', function(evt) {
// 				ele.addClass(FOCUS_CLASS);
// 				scope.$apply(function() {ctrl.$focused = true});
// 			}).bind('blur', function(evt) {
// 				ele.removeClass(FOCUS_CLASS);
// 				scope.$apply(function() {ctrl.$focused = false});

// 			});
// 		}
// 	}
// }]);


