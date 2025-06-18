function initMap() {
    const location = { lat: -26.2670574, lng: 27.7714954 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Mellow & Cream By Lucia",
    });
}