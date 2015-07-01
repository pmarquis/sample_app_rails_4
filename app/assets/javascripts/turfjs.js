$( document ).ready(function() {
/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToParis(map){
  map.setCenter({lat:48.85159, lng:2.3777});
  map.setZoom(14);
}





/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'DemoAppId01082013GAL',
  app_code: 'AJKnXv84fjrb0KIHawS0Tg',
  useCIT: true,
  useHTTPS: true
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map  - not specificing a location will give a whole world view.
var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map);

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
moveMapToParis(map);

var point1 = turf.point([48.85159, 2.3777]);
var poly = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
                    [48.85169, 2.3777], 
                    [48.85469, 2.3707], 
                    [48.85769, 2.3637],
                    [48.86169, 2.3777],
                    [48.85769, 2.3947], 
                    [48.85469, 2.3917],
                    [48.85169, 2.3777]
                  ]]
  },
};

var poly_bounds = [];
for(coords of poly.geometry.coordinates[0]) {
  poly_bounds.push(coords[0]);
  poly_bounds.push(coords[1]);
  poly_bounds.push(100);
};

var geoStrip = new H.geo.Strip(
  poly_bounds,
  'values lat lng alt'
);
map.addObject(
  new H.map.Polygon(geoStrip, {
    style: {
      fillColor: '#AABBCC',
      strokeColor: '#603',
      lineWidth: 6
    }
  })
);

var centroidPt = turf.centroid(poly);
var marker = new H.map.Marker({lat:centroidPt.geometry.coordinates[0], lng:centroidPt.geometry.coordinates[1]});
map.addObject(marker);

});