function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};



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