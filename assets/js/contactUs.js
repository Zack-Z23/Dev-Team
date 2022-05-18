const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const sDialog = document.getElementById('success');
const fDialog = document.getElementById('failure');
const sendBtn = document.getElementById('sendBtn');
const mapDiv = document.getElementById('map');


let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function showSuccess() {
    fName.value = '';
    lName.value = '';
    email.value = '';

    sDialog.showModal();

    setTimeout(() => {
        sDialog.close();
    }, 2500);
    console.log('a');}

function showFailure() {
    fDialog.showModal();
    setTimeout(() => {
        fDialog.close();
    }, 2500);
    console.log('a');
}

sendBtn.addEventListener('click', function () {
    if (!fName.value || !lName.value || !email.value) {
        console.log("one of option is empty");
        showFailure();
    } else {
        if (email.value.match(emailRegex)) {
            console.log("input is all valid");
            showSuccess();
        }
        else {
            console.log("not all inputs are valid");
            showFailure();
        }
    }
});

mapboxgl.accessToken = 'pk.eyJ1IjoienphY2hhcmlhZCIsImEiOiJjbDF3Z205bnYwZ210M2VxY3kxaXh5dHlyIn0.dj12CYh-M0ZX6XRVenx_Rw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zzachariad/cl1wgobuh001v14p73j3ful19',
    center: [-97.19248550421106,49.81478512622047],
    zoom: 14
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
    .setLngLat([-97.19248550421106,49.81478512622047])
    .addTo(map);