const themeSwitchToggle = document.getElementById('themeSwitchToggle');
const body = document.body;

themeSwitchToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    //save user preference
    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode');
    }
    else{
        localStorage.setItem('theme', '');
    }
});

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    body.classList.add(currentTheme);
}