const lastModified = document.getElementById("lastModified");
const today = new Date();

const currentYear = document.getElementById("currentYear");
const year = today.getFullYear();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector(' nav');
currentYear.innerHTML = ` ${year} `;
lastModified.innerHTML = `Developed by Malikantsi | Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;



hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const getstring = window.location.search;
const myInfo = new URLSearchParams(getstring);
console.log(myInfo.get("form-timestamp"));

const timestamp = new Date().toISOString();
// document.getElementById("form-timestamp").value = timestamp;
document.getElementById("timestamp-display").textContent = timestamp;

document.querySelector("#results").innerHTML = `
<p>Application is for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Organizational title is ${myInfo.get('Organizationaltitle')} </p>
<p>Email :${myInfo.get('email')} </p>
<p>Phone :${myInfo.get('phone')} </p>
<p>Organization's Name is ${myInfo.get('business-name')} </p>
<p>Membership Level:${myInfo.get('membership-level')} </p>
<p>Organization Description:${myInfo.get('org-description')} </p>
<p>Time of registration: ${myInfo.get("form-timestamp")}</p> 


`;