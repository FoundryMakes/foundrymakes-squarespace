mapboxgl.accessToken =
  'pk.eyJ1IjoiZm91bmRyeW1ha2VzIiwiYSI6ImNqN2tyZ25jNzJkZXUyeGx4OWtlaDg0ZW8ifQ.YRZTiddbf3Zc7osoxZPCMw';

var start = [-93.257466, 44.948063];
var end = [-93.26880599, 44.976420293];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: start,
  zoom: 12,
  pitch: 75,
  scrollZoom: false
});

map.on('load', function() {
  // add a marker to the map
  // create an HTML element for feature
  var markerElement = document.createElement('div');
  markerElement.className = 'marker';
  new mapboxgl.Marker(markerElement, { offset: [0, -40] })
    .setLngLat(end)
    .addTo(map);

  map.addSource('points', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: end
          }
        }
      ]
    }
  });

  map.flyTo({
    center: end,
    zoom: 16,
    bearing: 0,
    speed: 0.5,
    curve: 2,
    easing: function(t) {
      return t;
    }
  });
});
