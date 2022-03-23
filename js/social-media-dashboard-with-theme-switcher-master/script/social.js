const modeSelector = document.querySelector('.mode');
const theme = document.querySelector('#change-theme');
let themeDark = true;

eventsListener();

function eventsListener() {
    document.addEventListener('DOMContentLoaded', () => {
        changeThemeLocalStorage();
    })
    modeSelector.addEventListener('click', changeMode);
}

function changeMode() {
    if (themeDark) {
        theme.href = 'themes/light.css';
        modeSelector.classList.add('mode--right');
    }
    else {
        theme.href = 'themes/dark.css';
        modeSelector.classList.remove('mode--right');
    }
  saveThemeLocalStorage(theme.href);
   themeDark = !themeDark;
 }

function saveThemeLocalStorage(theme) {
    localStorage.setItem('themeSocial', theme);
}

function chargeThemeLocalStorage() {
    const themeLS = localStorage.getItem('themeSocial');
    if (themeLS) {
        theme.href = themeLS;
        if (themeLS.includes('light')) {
            themeDark = false;
            modeSelector.classList.add('mode--right');
        };
    }
}
