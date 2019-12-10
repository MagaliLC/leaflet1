    var map = L.map('map').setView([41.387136, 2.170052], 16);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoibWFnYWxpbGMiLCJhIjoiY2szem00azU4MXJvYjNtbzFrMXkybjU0NSJ9.Yj5LOOmGZPFezCFepgDxxQ'
    }).addTo(map);
    var marker = L.marker([41.387277, 2.166055]).addTo(map);
    marker.bindPopup("<h6>Restaurant Centfocs</h6><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona.").openPopup();