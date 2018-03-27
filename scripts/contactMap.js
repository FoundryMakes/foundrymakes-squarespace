mapboxgl.accessToken = 'pk.eyJ1IjoiZm91bmRyeW1ha2VzIiwiYSI6ImNqN2tyZ25jNzJkZXUyeGx4OWtlaDg0ZW8ifQ.YRZTiddbf3Zc7osoxZPCMw';

var start = [-93.2574660, 44.9480630];
var end = [-93.26880599, 44.976420293];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: start,
  zoom: 12,
  pitch: 75,
  scrollZoom: false
});

map.on('load', function () {

  // add a marker to the map
  // create an HTML element for feature
  var markerElement = document.createElement('div');
  markerElement.className = 'marker';
  new mapboxgl.Marker(markerElement, { offset: [0, -40] })
    .setLngLat(end)
    .addTo(map);

  map.addSource("points", {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": end
        }
      }]
    }
  });

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": "points",
    "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }
  });

  map.flyTo({
    center: end,
    zoom: 16,
    bearing: 0,
    speed: 0.5,
    curve: 2,
    easing: function (t) {
      return t;
    }
  });
})