const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const responce = await fetch(url);
    const data = await responce.json();
    console.table(data.prophets);

    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        
        let card = document.createElement('section');
        let fullname = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('date');
        let birthplace = document.createElement('p');
        
        fullname.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        birthdate.textContent = `${prophet.birthdate}`;
        birthplace.textContent = `${prophet.birthplace}`;

        card.appendChild(fullname);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}
