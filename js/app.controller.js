import { locService } from './services/loc.service.js';
import { mapService } from './services/map.service.js';

window.onload = onInit;
window.onAddMarker = onAddMarker;
window.onPanTo = onPanTo;
window.onGetLocs = onGetLocs;
window.onGetUserPos = onGetUserPos;
window.setLocation = setLocation;
function onInit() {
  mapService
    .initMap()
    .then(() => {
      console.log('Map is ready');
    })
    .catch(() => console.log('Error: cannot init map'));
}

// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
  console.log('Getting Pos');
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function onAddMarker(lat, lng) {
  console.log('Adding a marker');
  mapService.addMarker({ lat, lng });
}

function onGetLocs() {
  locService.getLocs().then((locs) => {
    console.log('Locations:', locs);
    document.querySelector('.locs').innerText = JSON.stringify(locs);
  });
}

function onGetUserPos() {
  navigator.geolocation.getCurrentPosition(showLocation);
  getPosition()
    .then((pos) => {
      console.log('User position is:', pos.coords);
      document.querySelector(
        '.user-pos'
      ).innerText = `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`;
    })
    .catch((err) => {
      console.log('err!!!', err);
    });
}
function onPanTo() {
  console.log('Panning the Map');
  mapService.panTo(35.6895, 139.6917);
}

function showLocation(position) {
  //
  var lat = position.lat;
  var lng = position.lng;
  mapService.initMap(lat, lng);
}
function setLocation(map) {
  console.log('hi');
  google.maps.event.addListener(map, 'click', (event) => {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    console.log(lat);
    console.log(lng);
    onAddMarker(lat, lng);
    // openModal();
  });
}
let location = locService.getLocs('london');
location.then((ans) => {
  // console.log('kkk', ans);
  // var a = ans.results[0].geometry.location;
  // console.log(a, 'a');

  showLocation(ans);
});
