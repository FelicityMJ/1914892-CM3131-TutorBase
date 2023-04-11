const button = document.getElementById('my-button');
const originalText = button.innerHTML;
let newText = 'Click on Tutor Icons!';

button.addEventListener('click', () => {
  if (button.innerHTML === originalText) {
    button.innerHTML = newText;
  } else {
    button.innerHTML = originalText;
  }
});

// Define the MapComponent class
class MapComponent {
constructor() {
this.map = null;
this.mapContainer = document.getElementById('map');
}

ionViewDidEnter() {
// Initialize the map
this.map = L.map(this.mapContainer).setView([51.505, -0.09], 13);

// Add a tile layer to the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1IjoiMTkxNDg5MiIsImEiOiJjbGZzOXl6Z2swNDN4M3RvNHpvemlldWtuIn0.3za73SRor-M-VQ5cva9pGw'
}).addTo(this.map);

// Male Teacher Icon 1
const maleIcon = L.icon({
  iconUrl: 'Pictures/maleteacher.png',
  iconSize: [50, 50],
  iconAnchor: [16, 50],
  popupAnchor: [0, -50]
});

const popupContent =
'<b>Michael Jordan</b><br>Basketball Coach';
const marker1 = L.marker([51.5, -0.1], { icon: maleIcon }).addTo(this.map);
marker1.bindPopup(popupContent, { className: 'custom-popup' });
marker1.on('click', () => {
marker1.openPopup();
});

const popupContent3 =
'<b>Bill Gates</b><br>Computer Science Tutor';
const marker3 = L.marker([51.4, -0.1], { icon: maleIcon }).addTo(this.map);
marker3.bindPopup(popupContent3, { className: 'custom-popup' });
marker3.on('click', () => {
marker3.openPopup();
});

// Female Teacher Icon 1
   const femaleIcon = L.icon({
  iconUrl: 'Pictures/femaleteacher.png',
  iconSize: [50, 50],
  iconAnchor: [16, 50],
  popupAnchor: [0, -50]
});

const popupContent2 =
'<b>Carol Vorderman</b><br>Maths Tutor';
const marker2 = L.marker([51.55, -0.1], { icon: femaleIcon }).addTo(this.map);
marker2.bindPopup(popupContent2, { className: 'custom-popup' });
marker2.on('click', () => {
marker2.openPopup();
});

const popupContent4 =
'<b>Nicola Sturgeon</b><br>Modern Studies Tutor';
const marker4 = L.marker([51.45, -0.1], { icon: femaleIcon }).addTo(this.map);
marker4.bindPopup(popupContent2, { className: 'custom-popup' });
marker4.on('click', () => {
marker4.openPopup();
});


}
}

// Create a new instance of the MapComponent class
const mapComponent = new MapComponent();

// Call the ionViewDidEnter method to initialize the map
mapComponent.ionViewDidEnter();