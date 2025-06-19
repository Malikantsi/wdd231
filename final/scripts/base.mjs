import savePreference from "/final/scripts/preference.js";
import { getPreference } from "/final/scripts/preference.js";
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

const theme = document.querySelector('#theme');
theme.addEventListener("change", () => {
    savePreference();
    getPreference();
});

getPreference();

