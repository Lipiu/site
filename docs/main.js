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

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("info-popup");
    const popupContent = document.getElementById("popup-content");

    const buttons = document.querySelectorAll(".nav-btn");

    const contentMap = {
        "About me": `
            <h3>About Me</h3>
            <p>I’m a 3rd year Computer Science student at ASE, CSIE.</p>
        `,

        "Experience": `
            <h3>Experience</h3>
            <ul>
            <li>1-month internship at SoftServe</li>
            </ul>
        `,
        "Personal Projects": `
            <h3>Personal Projects</h3>
            <ul>
            <li><a href="https://github.com/Lipiu/My-SQLite-Engine" target="_blank"><strong>SQLite engine</strong> in C++</a></li>
            <li><a href="https://github.com/Lipiu/PizzaDeliveryApp" target="_blank"><strong>Pizza delivery form app</strong> in C#</a></li>
            <li><a href="https://github.com/Lipiu/gym-database-system" target="_blank"><strong>Gym management system</strong> using SQL</a></li>
            <li><a href="https://github.com/Lipiu/proiect-practica" target="_blank"><strong>Fictional book store ETL pipeline</strong> using Python and PostgreSQL</a></li>
            </ul>
            `
        };

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const label = button.textContent.trim();
            popupContent.innerHTML = contentMap[label] || "<p>No content available.</p>";

            const rect = button.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

            // Position the popup just below the button
            popup.style.left = (rect.left + scrollLeft) + "px";
            popup.style.top = (rect.bottom + scrollTop + 5) + "px";
            popup.style.display = "block";
        });
    });

    // Close popup when clicking outside
    window.addEventListener("click", function(e) {
        if (!popup.contains(e.target) && !e.target.classList.contains("nav-btn")) {
            popup.style.display = "none";
        }
    });
});
