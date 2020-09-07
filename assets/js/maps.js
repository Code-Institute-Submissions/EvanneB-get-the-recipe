
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 54.76314350,
            lng: -8.41170970
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 54.76314350, lng: -8.41170970 },
    
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}