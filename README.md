# Portfolio — Chase Angelo RODRIQUES ROQUE

Personal portfolio of a cybersecurity student at Epitech Marseille, built from a digital resume (Epitech web piscine) and extended with JavaScript.

**Live site:** https://carr-etu.github.io/my-portfolio

The design is a retro terminal: a `neofetch`-style introduction, an ASCII-art portrait, CRT scanlines, and a dark / light "Arctic Cabin" palette.

---

## Features

- **Bilingual (FR / EN) on a single page**: one HTML file, translations stored in `js/translations.js`, language switched without reloading the page.
- **Section filtering**: choosing a section in the menu shows only that section; with no section selected, everything is visible. Done in pure CSS with `:target` and `:has()`.
- **Menu that closes itself** after a section is chosen (JavaScript).
- **Dark / light theme** in pure CSS (a checkbox and `:has()`).
- **ASCII portrait with glitch reveal**: the color photo appears on hover, tap or keyboard focus.
- **Terminal details**: the `neofetch` command types itself, blinking cursors, CRT flicker.
- **Accessibility**: semantic HTML, keyboard focus styles, `aria-pressed` on the language buttons, and animations disabled for users with `prefers-reduced-motion`.
- **Responsive**: mobile first, with layouts for tablet and desktop.

---

## Project structure

```
.
├── index.html            # the page (French text by default)
├── css/
│   └── style.css         # all styles, organized in numbered sections
├── js/
│   ├── translations.js   # FR / EN dictionary (one key per piece of text)
│   └── main.js           # language switch, menu behavior
└── assets/
    ├── photo-color.jpg   # portrait revealed under the ASCII art
    └── ascii-head-dark.txt
```

---

## How the translation works

1. Each translatable element in the HTML has a key:
   ```html
   <h2 data-i18n="profile.title">Profil</h2>
   ```
2. `js/translations.js` holds the text for that key in each language:
   ```js
   fr: { "profile.title": "Profil" },
   en: { "profile.title": "Profile" }
   ```
3. `setLanguage(lang)` in `js/main.js` finds every `[data-i18n]` element, replaces its text with the right translation, and updates `<html lang>` and the active button.

Design choices:
- **The French text stays in the HTML**, so the page is still readable if JavaScript doesn't load.
- **Translations are a JS file, not JSON**: no `fetch` needed, so it works when the file is opened directly and on GitHub Pages.
- **`textContent`, not `innerHTML`**: translations are inserted as plain text, never as HTML. When an element contains other tags (a link, a `<sup>`, a sub-list), only its text is wrapped in a `<span data-i18n>`, so those tags are left untouched.

---

## Run locally

No build step and no dependencies. Either:
- open `index.html` in a browser, or
- use a local server such as the VS Code **Live Server** extension.

---

## Deployment

Hosted with **GitHub Pages**, deployed from the `main` branch, root folder.

---

## Roadmap

- [ ] Translate attributes (`<title>`, image `alt`, `aria-label`, form button labels)
- [ ] Remember the chosen language with `localStorage`
- [ ] Interests page (DJ, radio, live coding)
- [ ] Detailed technical projects page

---

## Tech

HTML · CSS · JavaScript (vanilla) · Google Fonts (Space Grotesk, VT323)