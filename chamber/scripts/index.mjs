
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
    alert("I'm clicked");
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



const members = './data/members.json';
const cards = document.querySelector('.cards');


async function getMembersData() {
    // console.log("testing");
    const response = await fetch(members);
    const data = await response.json();
    // console.table(data);

    displayMembersData(data);

}
getMembersData();

function displayMembersData(members) {
    let intCount = 0;
    let filteredMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
    // console.log(filteredMembers.sort(() => 0.5 - Math.random()).slice(0, 3));
    console.log(filteredMembers.sort(() => 0.5 - Math.random()).slice(0, 3));

    filteredMembers.forEach(member => {
        intCount++;
        if (intCount <= 3) {
            let card = document.createElement('section');
            card.classList.add('home-card');
            let name = document.createElement('h2');
            name.textContent = member.name;
            let address = document.createElement('p');
            address.innerHTML = `<span class="label">Address:</span> ${member.address}`;
            let phone = document.createElement('p');
            phone.innerHTML = `<span class="label">Phone:</span>${member.phone}`

            let description = document.createElement('p');
            description.classList.add('business-tag-line');
            description.textContent = member.description;

            const website = document.createElement('a');
            website.href = member.website;
            website.innerHTML = "Visit Website";
            website.target = "_blank";

            const image = document.createElement('img');
            image.src = `images/${member.image}`;
            image.alt = `${member.name} logo`;

            card.appendChild(name);
            card.appendChild(description);
            card.appendChild(image);


            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            cards.appendChild(card);
        }
    });
}

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherDesc = document.querySelector('#weather-desc');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.2664&lon=27.7725&units=metric&appid=8b768217fac81b08049e3dd3f1004e88';
const weatherForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast/?lat=-26.2664&lon=27.7725&units=metric&appid=8b768217fac81b08049e3dd3f1004e88'
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

async function apiForecast() {
    try {
        const response = await fetch(weatherForecastUrl);
        if (response.ok) {
            const data = await response.json();
            getWeatherForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

apiFetch();
apiForecast();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    document.getElementById("weather-icon").src = iconsrc;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', iconsrc);
    captionDesc.textContent = `${desc}`;
    weatherDesc.textContent = desc;
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;C`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    sunrise.textContent = `Sunrise: ${getLocalTime(data.sys.sunrise)}`;
    sunset.textContent = `Sunset: ${getLocalTime(data.sys.sunset)}`;
}

function getWeatherForecast(data) {
    console.log(new Date(data.list[8].dt_txt).getDay());

    const DayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const today = document.querySelector('#today');
    const tomorrow = document.querySelector('#tomorrow');
    const dayAfterTomorrow = document.querySelector('#dayAfterTomorrow');
    today.innerHTML = `Today: <b>${data.list[0].main.temp}&deg; C</b>`;
    tomorrow.innerHTML = `${DayOfWeek[new Date(data.list[8].dt_txt).getDay() - 1]}: <b>${data.list[8].main.temp}&deg; C</b>`;
    dayAfterTomorrow.innerHTML = `${DayOfWeek[new Date(data.list[16].dt_txt).getDay() - 1]}: <b>${data.list[16].main.temp}&deg; C</b>`;

}

function getLocalTime(time) {
    var convertedTime = new Date(time * 1000).toLocaleTimeString([], { hour12: false });
    return convertedTime;
}
