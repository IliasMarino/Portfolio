// Elements
const darkRadio = document.getElementById('darkMode');
const lightRadio = document.getElementById('lightMode');
const body = document.body; 

// Apply cached theme on reload
const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme)
}

// funcion to go back when clicking on the logo
function goBack() {
    window.history.back();
}
