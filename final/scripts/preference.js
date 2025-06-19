export default function savePreference() {
    const theme = document.querySelector('#theme');
    localStorage.setItem('UserPreference', theme.value);

}

export function getPreference() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const headerLinks = document.querySelectorAll('header a');
    const footerText = document.querySelectorAll('footer p');
    let textColor = '';
    let backgroundColor = '';

    if (localStorage.getItem('UserPreference') == null || localStorage.getItem('UserPreference') == 'Brown') {
        //default dark (Brown) theme
        backgroundColor = '#5C4434';
        textColor = '#FAF7F4';
    } else {
        backgroundColor = '#FAF7F4';
        textColor = 'Black';
    }

    header.style.backgroundColor = backgroundColor;
    footer.style.backgroundColor = backgroundColor;

    headerLinks.forEach(link => {
        link.style.color = textColor;
    });
    footerText.forEach(p => {
        p.style.color = textColor;
    });

}