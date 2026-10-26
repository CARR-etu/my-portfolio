function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = translations[lang][key];
    });
    document.documentElement.lang = lang;
}

const menu = document.querySelector("nav details");

menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        menu.open = false;
    }
});

const langSwitch = document.querySelector(".lang-switch");

langSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("____");
    if (button) {
        setLanguage(button.dataset.____);
    }
});