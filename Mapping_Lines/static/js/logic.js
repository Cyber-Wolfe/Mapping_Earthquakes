// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [40.6413, -73.7781],
  [43.6777, -79.6248],
  [30.18999924, -97.668663992],
  [37.615223, -122.389977]
];

// Create a polyline using the line coordinates and make the line red.
// Color can be changed by changing the string value
L.polyline(line, {
  color: "navy",
  weight: 4,
  opacity: 0.5,
  dashArray: 7
}).addTo(map);


// We create the tile layer that will be the background of our map.
// replace streets-v11 with: 
// 'dark-v10' to make it black
// 'satellite-streets-v11' to make it satellite look 
// https://leafletjs.com/reference.html#marker for mapping documentation
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data @copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our map tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});