
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

const members = './data/members.json';
const cards = document.querySelector('.cards');
const gridView = document.querySelector('.grid-view');
const listView = document.querySelector('.list-view');

gridView.addEventListener('click', (e) => {
    e.preventDefault();
    // if the section does not contain the class "cards, add it to the element"
    cards.classList.remove('cards-list');
    cards.classList.add('cards');
    
})

listView.addEventListener('click', (e) => {
    e.preventDefault();
    // if the section does not contain the class "cards-list, add it to the element"
    cards.classList.remove('cards');
    cards.classList.add('cards-list');
})

async function getMembersData() {
    console.log("testing");
    const response = await fetch(members);
    const data = await response.json();
    console.table(data);

    displayMembersData(data);
    
}
getMembersData();

function displayMembersData(members) {
    members.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        name.textContent = member.name;
        let address = document.createElement('p');
        address.innerHTML = `<span class="label">Address:</span> ${member.address}`;
        let phone = document.createElement('p');
        phone.innerHTML = `<span class="label">Phone:</span>${member.phone}`

        let description = document.createElement('p');
        description.textContent = member.description;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";

        const image = document.createElement('img');
        image.src = `images/${member.image}`; 
        image.alt = `${member.name} logo`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        
        cards.appendChild(card);
        console.log(cards);
        
    });
}