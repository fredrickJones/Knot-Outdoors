'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope, rockService) {


// this will use the users current location after clicking the button
	// if (!navigator.geolocation) {
	// 	geolocate.innerHTML = 'Geolocation is not available';
	// } else {
	// 	geolocate.onclick = function(e) {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		map.locate();
	// 	};
	// };
	// map.on('locationfound', function(e) {
	// 	map.fitBounds(e.bounds);

	// 	myLayer.setGeoJSON({
	// 		type: 'Feature',
	// 		geometry: {
	// 			type: 'Point',
	// 			coordinates: [e.latlng.lng, e.latlng.lat]
	// 		},
	// 		properties: {
	// 			'title': 'here i am',
	// 			'marker-color': '#ff8888',
	// 			'marker-symbol': 'star'
	// 		}
	// 	});
	// 	geolocate.parentNode.removeChild(geolocate);
	// });
});


