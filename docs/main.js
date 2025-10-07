const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
}

sunIcon.addEventListener('click', toggleTheme);
moonIcon.addEventListener('click', toggleTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    body.classList.add(currentTheme);
}
