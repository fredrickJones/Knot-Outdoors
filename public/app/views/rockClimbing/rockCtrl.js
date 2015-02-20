'use strict';
var app = angular.module('knotOutdoors');

app.controller('rockCtrl', function($scope) {
	// L.mapbox.accessToken = 'pk.eyJ1IjoiZnJlZHJpY2tqb25lcyIsImEiOiJsTzFyT0ZBIn0.Ulb8SAqQO5dutxwjaQeCwA';
	// var geolocate = document.getElementById('geolocate');
	// var map = L.mapbox.map('rock-map', 'fredrickjones.l6jlgmj1');

	// var myLayer = L.mapbox.featureLayer().addTo(map);

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


