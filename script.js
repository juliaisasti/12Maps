//Inicializar el display del mapa y setear la vista (coordenadas y zoom)

let map = L.map('map').setView([51.505, -0.09], 10);

//Cargar mapa del mundo y añadirlo 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//  maxZoom: 17,
//  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// }).addTo(map);


// var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
//  maxZoom: 20,
//  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
// }).addTo(map);

const marker = L.marker([51.5, -0.10]).addTo(map);

//Añadir popup a marca

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

//Añadir círculo

var circle = L.circle([51.508, -0.12], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 800
}).addTo(map);

//Añadir popup

let popup = L.popup()
    .setLatLng([51.59, -0.15])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);

//Añadir marca con imagen

const markerImg = L.marker([51.49, -0.10]).addTo(map);

markerImg.bindPopup(`<b>Un gatete!</b><br><img class="cat" src="./assets/kitty.png"/>`).openPopup();

//Añadir evento a elemento

const popup1 = L.popup();

function onMapClick(e) {
    popup1
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

// otro

var bulbIcon = L.icon({
    iconUrl: './assets/bulb.png',
    iconSize:     [38, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.51, -0.08], {icon: bulbIcon}).addTo(map);