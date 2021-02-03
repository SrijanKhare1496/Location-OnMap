
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

navigator.geolocation.getCurrentPosition(onSuccess, onError, {
  timeout: 30000 , enableHighAccuracy: true
});

function onSuccess(position) {
  var lat = position.coords.latitude;
  var lang = position.coords.longitude;

  //Google Maps
  var myLatlng = new google.maps.LatLng(lat, lang);
  var mapOptions = {
      zoom: 1,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
  });
}

function onError(error) {
  alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
}
google.maps.event.addDomListener(window, 'load', onSuccess);

}
