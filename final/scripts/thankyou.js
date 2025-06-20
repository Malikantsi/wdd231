const getstring = window.location.search;
const myInfo = new URLSearchParams(getstring);
console.log(myInfo);

const timestamp = new Date().toISOString();
console.log(timestamp);

// document.getElementById("timestamp-display").value = timestamp;


document.querySelector("#results").innerHTML = `
    <p>Application is for ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Email: ${myInfo.get('email')} </p>
    <p>Phone: ${myInfo.get('phone')} </p>
    <p>Company Name: ${myInfo.get('business-name')} </p>
    <p>Service:${myInfo.get('service')} </p>
    <p>Description:${myInfo.get('org-description')} </p>
    <p>Time of registration: ${myInfo.get("form-timestamp")}</p> `;
