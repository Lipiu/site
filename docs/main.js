const THEME_STORAGE_KEY = 'theme';
const LIGHT_MODE_CLASS = 'light-mode';

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavPopups();
    initHeroTyping();
});

function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) 
        return;

    applyStoredTheme();

    toggle.addEventListener('click', toggleTheme);
    toggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleTheme();
        }
    });

    function toggleTheme() {
        const isLight = document.body.classList.toggle(LIGHT_MODE_CLASS);
        if (isLight) {
            localStorage.setItem(THEME_STORAGE_KEY, LIGHT_MODE_CLASS);
        } else {
            localStorage.removeItem(THEME_STORAGE_KEY);
        }
        toggle.setAttribute('aria-label', isLight ? 'Toggle dark mode' : 'Toggle light mode');
    }

    function applyStoredTheme() {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (storedTheme === LIGHT_MODE_CLASS) {
            document.body.classList.add(LIGHT_MODE_CLASS);
            toggle.setAttribute('aria-label', 'Toggle dark mode');
        }
    }
}

function initNavPopups() {
    const popup = document.getElementById('info-popup');
    const popupContent = document.getElementById('popup-content');
    const navButtons = document.querySelectorAll('.nav-btn');

    if (!popup || !popupContent || !navButtons.length) return;

    const sectionContent = {
        about: `
            <h3>About Me</h3>
            <p>I’m a 3rd year Computer Science student at ASE, CSIE.</p>
        `,
        experience: `
            <h3>Experience</h3>
            <ul>
                <li>1-month internship at SoftServe</li>
            </ul>
        `,
        projects: `
            <h3>Personal Projects</h3>
            <ul>
                <li><a href="https://github.com/Lipiu/Learn-With-eASE" target="_blank" rel="noopener noreferrer"><strong>Interactive E-Learning Platform</strong> - React + Spring Boot + PostgreSQL</a></li>
                <li><a href="https://github.com/Lipiu/password-generator" target="_blank" rel="noopener noreferrer"><strong>Password Generator</strong> - C</a></li>
                <li><a href="https://github.com/Lipiu/PizzaDeliveryApp" target="_blank" rel="noopener noreferrer"><strong>Pizza Delivery Form App</strong> - C#</a></li>
                <li><a href="https://github.com/Lipiu/proiect-practica" target="_blank" rel="noopener noreferrer"><strong>Fictional Book Store ETL Pipeline</strong> - Python + PostgreSQL</a></li>
                <li><a href="https://github.com/Lipiu/Solar-System" target="_blank" rel="noopener noreferrer"><strong>Animated Solar System</strong> - JavaScript + HTML + CSS</a></li>
                <li><a href="https://github.com/Lipiu/gym-database-system" target="_blank" rel="noopener noreferrer"><strong>Gym Management System</strong> - SQL</a></li>
            </ul>
        `,
    };

    navButtons.forEach((button) => {
        button.addEventListener('click', () => openPopup(button));
    });

    document.addEventListener('click', (event) => {
        const clickedInsidePopup = popup.contains(event.target);
        const clickedNavButton = event.target.closest('.nav-btn');
        if (!clickedInsidePopup && !clickedNavButton) {
            closePopup();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closePopup();
    });

    function openPopup(button) {
        const section = button.dataset.section;
        const promptLine = `<div class="popup-prompt">$ ${section}</div>`;
        popupContent.innerHTML = promptLine + (sectionContent[section] || '<p>No content available.</p>');
        positionPopupBelow(button);
        popup.style.display = 'block';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    function positionPopupBelow(button) {
        const rect = button.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

        popup.style.left = `${rect.left + scrollLeft}px`;
        popup.style.top = `${rect.bottom + scrollTop + 10}px`;
    }
}

function initHeroTyping() {
    const heroText = document.getElementById('hero-text');
    if (!heroText) 
        return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) 
        return;

    const fullText = heroText.textContent;
    const typingSpeedMs = 45;
    let charIndex = 0;

    heroText.textContent = '';

    const typingInterval = setInterval(() => {
        charIndex += 1;
        heroText.textContent = fullText.slice(0, charIndex);

        if (charIndex >= fullText.length) {
            clearInterval(typingInterval);
        }
    }, typingSpeedMs);
}