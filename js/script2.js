var map = L.map('map').setView([41.387136, 2.170052], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibWFnYWxpbGMiLCJhIjoiY2szem00azU4MXJvYjNtbzFrMXkybjU0NSJ9.Yj5LOOmGZPFezCFepgDxxQ'
}).addTo(map);

createMarker();

function createMarker() {
    var marker = {};

    map.on('click', function(e) {
        latitude = e.latlng.lat;
        longitude = e.latlng.lng;

        if (marker != undefined) {
            map.removeLayer(marker);
        };

        marker = L.marker([latitude, longitude]).addTo(map);
        var group = new L.featureGroup([marker]);
        map.fitBounds(group.getBounds());
        marker.bindPopup("Mis coordenadas son: <br>" + "<b>" + "Lat: " + latitude + " Lng: " + longitude + "</b>").openPopup();
    });
}