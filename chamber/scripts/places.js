
const lastModified = document.querySelector("#lastModified");
const today = new Date();

lastModified.innerHTML = `Developed by Malikantsi | Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;

const currentYear = document.querySelector("#currentYear");
const year = today.getFullYear();
currentYear.innerHTML = ` ${year} `;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector(' nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const places = './data/places.json';
const cards = document.querySelector('#cards');

async function getPlacesData() {
    const response = await fetch(places);
    const data = await response.json();

    displayPlacesData(data);

}
getPlacesData();


function displayPlacesData(places) {
    const cards = document.querySelector('#cards');
    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card-places'; // class, not id
        card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
          <img src="${place.photo_url}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn more</button>
      `;
        cards.appendChild(card);
    });
}
setLocalStorageDate();
getLocalStorageDate();

function setLocalStorageDate() {
    if (localStorage.getItem('lastVisit') == null) {
        let Visited = new Date();
        localStorage.setItem('lastVisit', Visited);
        lastVisited.innerHTML = `Welcome! Let us know if you have any questions.`;
    }

}

function getLocalStorageDate() {
    if (localStorage.getItem('lastVisit') !== null) {
        const lastVisited = document.querySelector('#lastVisited');
        let dateLast = new Date(localStorage.getItem('lastVisit'));
        let timeDiff = Math.abs(new Date().getTime()) - Math.abs(dateLast.getTime());
        timeDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        if (timeDiff <= 1) {
            console.log("What?");
            lastVisited.innerHTML = `Back so soon! Awesome!`;
        } else {
            lastVisited.innerHTML = `You last visited ${timeDiff} days ago.`;
        }
    }
}


