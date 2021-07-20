// Elements
const darkRadio = document.getElementById('darkMode');
const lightRadio = document.getElementById('lightMode');
const body = document.body; 

// Apply cached theme on reload
const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme)
}

// Remember which radio button was selected
if (theme == 'dark') {
    var attr = document.createAttribute("checked");
    var h = document.getElementById('darkMode');
    h.setAttributeNode(attr); 
} else {
    var attr = document.createAttribute("checked");
    var h = document.getElementById('lightMode');
    h.setAttributeNode(attr); 
}


// Button event handlers
darkRadio.onclick = () => {
    body.classList.replace('light','dark');
    localStorage.setItem('theme', 'dark')
};

lightRadio.onclick = () => {
    body.classList.replace('dark','light');
    localStorage.setItem('theme', 'light')
};

// funcion to go back when clicking on the logo
function goBack() {
    window.history.back();
}
