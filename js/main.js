/* ==========================================================================
   main.js: language switch and menu behavior
   (the dictionary lives in translations.js, loaded before this file)
   ========================================================================== */


/* ===== Language ===== */

function setLanguage(lang) {
    // Text content: every element with a data-i18n key
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = translations[lang][key];
    });

    // Attributes: data-i18n-attr="attribute:key" (alt, aria-label, value)
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
        const [attribute, key] = element.dataset.i18nAttr.split(":");
        element.setAttribute(attribute, translations[lang][key]);
    });

    // Page language, for screen readers and search engines
    document.documentElement.lang = lang;

    // Active button: aria-pressed="true" on the chosen language only
    document.querySelectorAll(".lang-switch button").forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.lang === lang);
    });

    // Remember the choice for next visits and other pages
    localStorage.setItem("lang", lang);
}

// FR / EN buttons: one listener on the list (event delegation)
const langSwitch = document.querySelector(".lang-switch");

langSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) {
        setLanguage(button.dataset.lang);
    }
});


/* ===== Menu ===== */

// Close the menu when a section link is clicked
const menu = document.querySelector("nav details");

menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        menu.open = false;
    }
});

/* ===== Contact form ===== */

// On submit: open the visitor's email app with a pre-filled message
const contactForm = document.querySelector("#contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#fname").value + " " + document.querySelector("#lname").value;
        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#tel-num").value;
        const message = document.querySelector("#message").value;

        const subject = "Contact portfolio : " + name;
        const body = message + "\n\n" + name + "\n" + email + "\n" + phone;

        window.location.href = "mailto:chase-angelo.rodriques-roque@epitech.eu"
            + "?subject=" + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(body);
    });
}

// On page load: apply the saved language, if there is one
const savedLang = localStorage.getItem("lang");
if (savedLang) {
    setLanguage(savedLang);
}