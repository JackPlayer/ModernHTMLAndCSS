

function initMap() {
const loc = {lat: 48.428421, lng: -123.365646};

const map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 14
});
const marker = new google.maps.Marker({position: loc, map:map});

}
