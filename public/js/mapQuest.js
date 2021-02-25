function initMap() {
	// add your code here
	L.mapquest.key = 'hq6XSMZFzFWxQwAzbd7EAUKqUlbJSjHg';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8785629, -117.2379285],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	});

	//Add a marker to the map
	L.marker([32.8785629, -117.2379285]).addTo(map);

}