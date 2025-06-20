import savePreference from "./preference.js";
import { getPreference } from "./preference.js";


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is fully loaded and parsed");
    const buttonModal1 = document.querySelector('#buttonModal1');
    const buttonModal2 = document.querySelector('#buttonModal2');
    const buttonModal3 = document.querySelector('#buttonModal3');

    buttonModal1.addEventListener('click', (e) => {
        const modal1 = document.querySelector('#modal1');
        openModal(modal1);
    });
    buttonModal2.addEventListener('click', (e) => {
        const modal2 = document.querySelector('#modal2');
        openModal(modal2);
    });
    buttonModal3.addEventListener('click', (e) => {
        const modal3 = document.querySelector('#modal3');
        openModal(modal3);
    });

    function openModal(modal) {
        modal.style.display = "block";
    }

    const closeModal1 = document.querySelector('#closeModal1');
    const closeModal2 = document.querySelector('#closeModal2');
    const closeModal3 = document.querySelector('#closeModal3');

    closeModal1.addEventListener('click', (e) => { closeModal('#modal1'); });
    closeModal2.addEventListener('click', (e) => { closeModal('#modal2'); });
    closeModal3.addEventListener('click', (e) => {
        closeModal('#modal3');
    });

    function closeModal(id) {
        const modal = document.querySelector(id);
        modal.style.display = 'none';

    }

});


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

