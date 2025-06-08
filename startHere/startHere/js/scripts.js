const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));

document.querySelector("#results").innerHTML = `
<p>Appointment is for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy is  ${myInfo.get('ordinance')} on  ${myInfo.get('date')} at  ${myInfo.get('location')}</p>
<p>Your number ${myInfo.get('phone')}</p>
<p>Your number ${myInfo.get('email')}</p>`;
