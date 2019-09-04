const coordParagraph = document.querySelector('#showCoords');
const map = document.querySelector('#imgHolder');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        coordParagraph.innerText = "Your browser doesn't support geolocation";
    }

    function showPosition(positionData) {
        coordParagraph.innerHTML = `Longitude: ${positionData.coords.longitude}<br>Latitude: ${positionData.coords.latitude}
                                        <br>Altitude: ${positionData.coords.altitude}`;
        let latlon = `${positionData.coords.latitude},${positionData.coords.longitude}`; 
        // var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+" & zoom=14 & size=400x300 & sensor=false & key=YOUR_KEY";
    }

    function showError(e) {
        switch (e) {
            case e.PERMISSION_DENIED:
                coordParagraph.innerText = `Access denied`;
                break;
            case e.POSITION_UNAVAILABLE:
                coordParagraph.innerText = `Position unavailable`;
                break;
            case e.PERMISSION_TIMEOUT:
                coordParagraph.innerText = `The browser timed out while searching for a position`;
                break;
            case e.UNKNOWN_ERROR:
                coordParagraph.innerText = `Unknown error`;
                break;
            default:
                coordParagraph.innerText = `An unforeseen error has occurred`;
        }
    }
}

