$(function() {
  L.mapbox.accessToken = 'pk.eyJ1IjoidmFuZXNhIiwiYSI6ImYxOTAxOGI1NTBlOGJkMTdjZTRmNGVmNTg0NTUxMjFjIn0._G3yYtIvkPX1EC9QEkNB6Q';
	var map = L.mapbox.map('map', 'vanesa.e4c935ef')
	.setView([window.latitude, window.longitude], 15);
	// Disable the scroll Zoom
	map.scrollWheelZoom.disable();
	L.mapbox.featureLayer({
	// this feature is in the GeoJSON format: see geojson.org
	// for the full specification
	type: 'Feature',
	geometry: {
	type: 'Point',
	// coordinates here are in longitude, latitude order because
	// x, y is the standard for GeoJSON and many formats
	coordinates: [window.longitude, window.latitude]},
	properties: {
		title: window.child_name,
		description: window.description,
		// one can customize markers by adding simplestyle properties
		// https://www.mapbox.com/guides/an-open-platform/#simplestyle
		'marker-size': 'large',
		'marker-color': '#BE9A6B',
		'marker-symbol': window.marker_symbol,
		}
	}).addTo(map);
});