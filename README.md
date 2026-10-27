# Portfolio — Chase Angelo RODRIQUES ROQUE

Personal portfolio of a cybersecurity student at Epitech Marseille, built from a digital resume (Epitech web piscine) and extended with JavaScript.

**Live site:** https://carr-etu.github.io/my-portfolio

The design is a retro terminal: a `neofetch`-style introduction, an ASCII-art portrait, CRT scanlines, and a dark / light "Arctic Cabin" palette.

---

## Features

- **Three pages**: the resume (`index.html`), detailed technical projects (`projects.html`) and interests (`interests.html`), linked from a shared menu that shows the current page.
- **Bilingual (FR / EN) without duplicate pages**: each page exists once, translations are stored in `js/translations.js`, and the language switches without reloading. Text, attributes (`alt`, `aria-label`, button labels) and tab titles are all translated.
- **Language remembered** between visits and from one page to another, with `localStorage`.
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
├── index.html            # resume (French text by default)
├── projects.html         # detailed technical projects
├── interests.html        # interests: DJ, radio, live coding
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
4. Attributes use a second marker, `data-i18n-attr="attribute:key"`, read with `setAttribute`:
   ```html
   <img src="assets/photo-color.jpg" alt="..." data-i18n-attr="alt:attr.photo">
   ```
5. The choice is saved with `localStorage.setItem("lang", lang)` and applied again when the page loads.

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

## Project history

### v1: digital resume (Epitech web piscine)

The first version was a mini-project with one rule: **HTML and CSS only, no JavaScript**.

- Two separate pages: `index.html` in French and `en/index.html` in English, linked by FR / EN links.
- Every section always visible, one long scroll.
- A `<details>` menu that stayed open after choosing a section.
- Dark / light theme already in pure CSS (a hidden checkbox and `:has()`).

### First follow-up: feedback

For the portfolio version, JavaScript is allowed. The first follow-up gave five points:

1. The ASCII art: kept as is (positive feedback).
2. Close the menu with JS when a section is chosen.
3. Use i18n instead of one page per language.
4. Show only the active section, and all sections when none is active.
5. Add an interests section with personal projects (DJ, radio, live coding).

### v2: what changed, and why

| Before | Problem | Now |
|---|---|---|
| Two HTML files, one per language | Every change had to be made twice, and the versions drifted apart (the English page was missing a project and had different wording). Switching language loaded a new page, which reset the theme. | **One page + one dictionary** (`translations.js`). Each text exists once per language, and switching is instant. |
| Translation of text content only (`textContent`) | `textContent` only changes what is *between* the tags. In English mode, the photo's `alt`, the theme switch's `aria-label`, the form buttons and the tab title stayed in French, so screen reader users and the browser tab still got French. | **Attributes translated too**, with `data-i18n-attr` and `setAttribute`, plus `document.title`. |
| Language reset to French on every reload | A visitor who chose English had to choose again on each visit, and on each page once the site has several pages. | **Choice saved** with `localStorage`. |
| Menu stayed open after a click | It covered the section the visitor had just chosen. | **Closes itself** (JS click listener with event delegation). |
| All sections always visible | Long page, hard to focus on one part. | **Section filtering** in pure CSS (`:target` + `:has()`): lighter than JS, works without JS, and the browser's back button works on its own. |
| Content written for the piscine | Out of date compared with the current CV. | **Content updated** from the cybersecurity CV, sections reordered to match it. |
| One single page | No room to detail projects or add personal interests without making the resume too long. | **Three pages** (resume, projects, interests) sharing the same header, menu, styles and dictionary. |
| Site inside a `digital_resume/` folder | The public URL ended in `/digital_resume/`. | **Files at the root** of the repository, so the site is at `carr-etu.github.io/my-portfolio/`. |

---

## Roadmap

- [x] Translate attributes (`<title>`, image `alt`, `aria-label`, form button labels)
- [x] Remember the chosen language with `localStorage`
- [x] Interests page and detailed projects page: structure, menu and translations in place
- [ ] Interests page content (DJ, radio, live coding)
- [ ] Detailed projects content (goals, approach, difficulties, results for each project)

---

## Tech

HTML · CSS · JavaScript (vanilla) · Google Fonts (Space Grotesk, VT323)