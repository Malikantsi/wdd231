import savePreference from "./preference.js";
import { getPreference } from "./preference.js";
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

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector(' nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const theme = document.querySelector('#theme');
theme.addEventListener("change", () => {
    savePreference();
    getPreference();
});

getPreference();

