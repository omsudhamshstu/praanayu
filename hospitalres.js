const btn = document.getElementById('location-btnn');

function gotLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    alert(`Your location is: Latitude ${latitude}, Longitude ${longitude}`);
}

function noLocation() {
    alert('Unable to retrieve your location. Please enable location services.');
}

btn.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotLocation, noLocation);
});

alert('Please enable location services to get the nearest hospital');