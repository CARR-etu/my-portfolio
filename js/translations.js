/* ==========================================================================
   Translations: one key per piece of text, in both languages.
   The key matches the data-i18n attribute in the HTML.
   Loaded before main.js, so setLanguage() can read it.
   ========================================================================== */

const translations = {
    fr: {
        // ===== Header =====
        "header.subtitle": "Étudiant en cybersécurité",
        "theme.dark": "SOMBRE",
        "theme.light": "CLAIR",

        // ===== Menu =====
        "nav.profile": "Profil",
        "nav.education": "Formation",
        "nav.projects": "Projets",
        "nav.experience": "Expériences",
        "nav.volunteering": "Bénévolat",
        "nav.skills": "Compétences",
        "nav.certifications": "Certifications",
        "nav.languages": "Langues",
        "nav.interests": "Intérêts",
        "nav.contact-form": "Me contacter",

        // ===== Neofetch (only the <dd> with plain text, and two labels) =====
        "neofetch.os": "Étudiant en cybersécurité · Master of Science, Epitech",
        "neofetch.kernel": "Linguiste → Sécurité v2.0",
        "neofetch.uptime": "Alternance en cybersécurité & cloud · disponible janvier 2027 · 4 semaines / 2 semaines · jusqu'à 33 mois",
        "neofetch.packages": "11 installés : Linux, Bash, Python, SQL, HTML, CSS, JavaScript, Java, Docker, Git, Nmap",
        "neofetch.de": "Langues : EN · FR · ES · AR · LSF",
        "neofetch.terminal": "Projets : homelab Linux, IA auto-hébergée, Meshtastic, job board, Hack The Box",
        "neofetch.memory": "Hack The Box : Lvl 6",
        "neofetch.email": "E-mail",
        "neofetch.phone": "Téléphone",

        // ===== Profil =====
        "profile.title": "Profil",
        "profile.text": "Ancien enseignant d'anglais technique en reconversion vers la cybersécurité, passionné de Linux et de logiciel libre. Je recherche dans le cadre de mon Master au sein d'Epitech une alternance en cybersécurité (SOC, GRC, test d'intrusion) pour appliquer mes compétences systèmes et réseaux avec rigueur et pédagogie.",

        // ===== Formation =====
        "education.title": "Formation",
        "education.msc.title": "Master of Science - Cybersécurité & Cloud",
        "education.msc.ordinal": "e",
        "education.msc.year": "année, Pré-MSc",
        "education.msc.item1": "Groupe cybersécurité : cours de test d'intrusion (Exegol, Nmap, élévation de privilèges Windows)",
        "education.msc.item2": "Programme : web, Java, DevOps (Docker, CI/CD), système & réseau, sécurité offensive",
        "education.ba.title": "Bachelor of Arts - Linguistique appliquée et plurilinguisme (Honors)",
        "education.ba.mobility": "Mobilité internationale (Sciences Po Lyon, Lyon 2, Université de Genève) · 2019 - 2020",
        "education.ba.focus": "Relations internationales et culture en Asie du Sud-Ouest et Afrique du Nord",

        // ===== Projets =====
        "projects.title": "Projets",
        "projects.homelab.title": "Homelab Linux",
        "projects.homelab.meta": "Projet personnel · 2026 - aujourd'hui",
        "projects.homelab.item1": "Durcissement d'un serveur Linux (NAS) : SSH par clé, pare-feu, gestion des correctifs",
        "projects.homelab.item2": "Labo virtualisé (Kali Linux, Exegol sous Docker) pour tests de sécurité",
        "projects.ai.title": "IA auto-hébergée",
        "projects.ai.meta": "Projet personnel · 2026 - aujourd'hui",
        "projects.ai.item1": "LLM en local (Ollama, Jan, GPT4All) : confidentialité des données, sans cloud",
        "projects.ai.item2": "Gestion des accès selon le principe du moindre privilège",
        "projects.meshtastic.title": "Nœud Meshtastic (réseau maillé LoRa)",
        "projects.meshtastic.meta": "Projet personnel · 2026 - aujourd'hui",
        "projects.meshtastic.item1": "Montage, flashage du firmware, config radio : communication chiffrée hors internet",
        "projects.meshtastic.item2": "Création d'un club Epitech",
        "projects.jobboard.title": "Création d'un job board full-stack (projet Epitech en binôme)",
        "projects.jobboard.demo": "Démo :",
        "projects.jobboard.item1": "Responsable back-end : API Python (Flask), PostgreSQL, authentification, back-office",
        "projects.jobboard.item2": "Puis design visuel du front React en appui du binôme (HTML, CSS, JS) · noté 26/26",
        "projects.console.title": "Console portable rétro (Raspberry Pi)",
        "projects.console.meta": "Projet personnel · 2023 - aujourd'hui",
        "projects.console.item1": "Assemblage d'une console portable à partir d'un Raspberry Pi Zero 2 W et d'un HAT manette avec écran",
        "projects.console.item2": "Installation et configuration de RetroPie sous Linux : image système, émulateurs, mappage des boutons",
        "projects.htb.meta": "Plateforme de pratique en pentesting",
        "projects.htb.item1": "Challenges hacking, web, réseau et forensic",

        // ===== Expériences =====
        "experience.title": "Expériences",
        "experience.invigilator.title": "Surveillant d'examen - Ingénierie",
        "experience.invigilator.meta": "École Centrale Méditerranée, Marseille · mars 2026 - aujourd'hui",
        "experience.invigilator.item1": "Accueil et supervision des examens : contrôle d'identité, distribution/collecte des sujets, gestion d'incidents et dépôt des copies",
        "experience.teacher.title": "Enseignant - Anglais technique",
        "experience.teacher.meta": "Aix-Marseille Université, Marseille · octobre 2022 - août 2025",
        "experience.teacher.item1": "Conception du cursus d'anglais technique pour étudiants en informatique",
        "experience.teacher.item2": "Contenus spécialisés : IoT, cybersécurité, réseaux et télécoms",
        "experience.translator.title": "Traducteur indépendant (français → anglais)",
        "experience.translator.meta": "Angel Translations, Marseille · mai 2021 - aujourd'hui",
        "experience.translator.item1": "Traduction de documents culturels ; gestion administrative et facturation",

        // ===== Bénévolat =====
        "volunteering.title": "Bénévolat",
        "volunteering.studio.meta": "Marseille · 2025 - aujourd'hui",
        "volunteering.studio.item1": "Studio d'enregistrement communautaire : installation audio, gestion de projet",

        // ===== Compétences =====
        "skills.title": "Compétences",
        "skills.systems": "Systèmes : Linux, Bash, macOS, Windows",
        "skills.network": "Réseau : Nmap, TCP/IP, SSH, pare-feu",
        "skills.languages": "Langages : Python (Flask), SQL (PostgreSQL), HTML, CSS, JavaScript (React), Java, PHP",
        "skills.tools": "Outils : VirtualBox, QEMU (virt-manager), Docker, Exegol, Kali Linux, Git, Salesforce, Praat",
        "skills.security": "Sécurité : bases du test d'intrusion, durcissement, CTF Hack The Box (web, réseau, forensic)",
        "skills.hardware": "Matériel : électronique, firmware, audiovisuel",
        "skills.soft": "Savoir-être : pédagogie, rigueur, respect des procédures, autonomie, polyvalence, travail en équipe, veille technologique",

        // ===== Certifications =====
        "certifications.ccst": "Cisco Certified Support Technician (CCST) Cybersecurity · prévue janvier 2027",
        "certifications.columbia": "AI Cybersecurity & Governance · Columbia Engineering (en ligne) · 2026 (en cours)",
        "certifications.lsf": "Langue des signes française (LSF) - niveau 1 · Aix-Marseille Université · printemps 2024",
        "certifications.sql": "Learn SQL · Codecademy · été 2020",

        // ===== Langues =====
        "languages.title": "Langues",
        "languages.english": "Anglais : langue maternelle",
        "languages.french": "Français : bilingue",
        "languages.spanish": "Espagnol : intermédiaire",
        "languages.arabic": "Arabe : débutant",
        "languages.lsf": "Langue des signes française : débutant",

        // ===== Intérêts =====
        "interests.title": "Intérêts",
        "interests.tinkering": "Bidouillage électronique/informatique",
        "interests.foss": "Logiciel libre",
        "interests.retrogaming": "Rétro-gaming",
        "interests.dj": "DJ/production et mixage de musique",
        "interests.radio": "Radio",
        "interests.scifi": "Science-fiction",
        "interests.outdoors": "Voyage à vélo et randonnée",

        // ===== Me contacter =====
        "contact.title": "Me contacter",
        "contact.fname": "Prénom :",
        "contact.lname": "Nom de famille :",
        "contact.email": "E-mail :",
        "contact.phone": "Téléphone :",
        "contact.message": "Questions / Commentaires :",

        // ===== Footer =====
        "footer.top": "↑ Haut de page ↑",
        "footer.credits": "Chase Angelo RODRIQUES ROQUE - 2026 - Fait en HTML/CSS/JS",

        // ===== Attributes (for a later step: not text content) =====
        "attr.title": "Chase Angelo RODRIQUES ROQUE, Étudiant en cybersécurité",
        "attr.photo": "Photo de Chase Angelo RODRIQUES ROQUE",
        "attr.theme": "Mode clair",
        "attr.submit": "> envoyer",
        "attr.reset": "> effacer",
    },

    en: {
        // ===== Header =====
        "header.subtitle": "Cybersecurity student",
        "theme.dark": "DARK",
        "theme.light": "LIGHT",

        // ===== Menu =====
        "nav.profile": "Profile",
        "nav.education": "Education",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.volunteering": "Volunteering",
        "nav.skills": "Skills",
        "nav.certifications": "Certifications",
        "nav.languages": "Languages",
        "nav.interests": "Interests",
        "nav.contact-form": "Contact me",

        // ===== Neofetch =====
        "neofetch.os": "Cybersecurity student · Master of Science, Epitech",
        "neofetch.kernel": "Linguist → Security v2.0",
        "neofetch.uptime": "Cybersecurity & cloud work-study · available January 2027 · 4 weeks / 2 weeks · up to 33 months",
        "neofetch.packages": "11 installed: Linux, Bash, Python, SQL, HTML, CSS, JavaScript, Java, Docker, Git, Nmap",
        "neofetch.de": "Languages: EN · FR · ES · AR · LSF",
        "neofetch.terminal": "Projects: Linux homelab, self-hosted AI, Meshtastic, job board, Hack The Box",
        "neofetch.memory": "Hack The Box: Lvl 6",
        "neofetch.email": "Email",
        "neofetch.phone": "Phone",

        // ===== Profile =====
        "profile.title": "Profile",
        "profile.text": "Former technical English teacher retraining in cybersecurity, passionate about Linux and free software. As part of my Master's at Epitech, I am looking for a cybersecurity work-study position (SOC, GRC, penetration testing) to apply my systems and networking skills with rigor and a teacher's clarity.",

        // ===== Education =====
        "education.title": "Education",
        "education.msc.title": "Master of Science - Cybersecurity & Cloud",
        "education.msc.ordinal": "rd",
        "education.msc.year": "year, Pre-MSc",
        "education.msc.item1": "Cybersecurity track: penetration testing course (Exegol, Nmap, Windows privilege escalation)",
        "education.msc.item2": "Curriculum: web, Java, DevOps (Docker, CI/CD), systems & networks, offensive security",
        "education.ba.title": "Bachelor of Arts - Applied Linguistics and Multilingualism (Honors)",
        "education.ba.mobility": "Study abroad (Sciences Po Lyon, Lyon 2, University of Geneva) · 2019 - 2020",
        "education.ba.focus": "International relations and culture of Southwest Asia and North Africa",

        // ===== Projects =====
        "projects.title": "Projects",
        "projects.homelab.title": "Linux homelab",
        "projects.homelab.meta": "Personal project · 2026 - present",
        "projects.homelab.item1": "Hardened a Linux server (NAS): key-based SSH, firewall, patch management",
        "projects.homelab.item2": "Virtualized lab (Kali Linux, Exegol on Docker) for security testing",
        "projects.ai.title": "Self-hosted AI",
        "projects.ai.meta": "Personal project · 2026 - present",
        "projects.ai.item1": "Local LLMs (Ollama, Jan, GPT4All): data privacy, no cloud",
        "projects.ai.item2": "Access management following the principle of least privilege",
        "projects.meshtastic.title": "Meshtastic node (LoRa mesh network)",
        "projects.meshtastic.meta": "Personal project · 2026 - present",
        "projects.meshtastic.item1": "Assembly, firmware flashing, radio configuration: encrypted off-grid communication",
        "projects.meshtastic.item2": "Founded an Epitech club",
        "projects.jobboard.title": "Full-stack job board (Epitech pair project)",
        "projects.jobboard.demo": "Demo:",
        "projects.jobboard.item1": "Back-end lead: Python API (Flask), PostgreSQL, authentication, back office",
        "projects.jobboard.item2": "Then visual design of the React front end, supporting my partner (HTML, CSS, JS) · graded 26/26",
        "projects.console.title": "Retro handheld console (Raspberry Pi)",
        "projects.console.meta": "Personal project · 2023 - present",
        "projects.console.item1": "Built a handheld console from a Raspberry Pi Zero 2 W and a gamepad HAT with a screen",
        "projects.console.item2": "Installed and configured RetroPie on Linux: system image, emulators, button mapping",
        "projects.htb.meta": "Pentesting practice platform",
        "projects.htb.item1": "Hacking, web, network and forensics challenges",

        // ===== Experience =====
        "experience.title": "Experience",
        "experience.invigilator.title": "Exam invigilator - Engineering",
        "experience.invigilator.meta": "École Centrale Méditerranée, Marseille · March 2026 - present",
        "experience.invigilator.item1": "Exam reception and supervision: identity checks, distribution and collection of papers, incident handling and submission of exam scripts",
        "experience.teacher.title": "Teacher - Technical English",
        "experience.teacher.meta": "Aix-Marseille University, Marseille · October 2022 - August 2025",
        "experience.teacher.item1": "Designed the technical English curriculum for computer science students",
        "experience.teacher.item2": "Specialized content: IoT, cybersecurity, networks and telecoms",
        "experience.translator.title": "Freelance translator (French → English)",
        "experience.translator.meta": "Angel Translations, Marseille · May 2021 - present",
        "experience.translator.item1": "Translation of cultural documents; administration and invoicing",

        // ===== Volunteering =====
        "volunteering.title": "Volunteering",
        "volunteering.studio.meta": "Marseille · 2025 - present",
        "volunteering.studio.item1": "Community recording studio: audio installation, project management",

        // ===== Skills =====
        "skills.title": "Skills",
        "skills.systems": "Systems: Linux, Bash, macOS, Windows",
        "skills.network": "Networking: Nmap, TCP/IP, SSH, firewalls",
        "skills.languages": "Languages: Python (Flask), SQL (PostgreSQL), HTML, CSS, JavaScript (React), Java, PHP",
        "skills.tools": "Tools: VirtualBox, QEMU (virt-manager), Docker, Exegol, Kali Linux, Git, Salesforce, Praat",
        "skills.security": "Security: penetration testing fundamentals, hardening, Hack The Box CTFs (web, network, forensics)",
        "skills.hardware": "Hardware: electronics, firmware, audiovisual",
        "skills.soft": "Soft skills: teaching, rigor, following procedures, autonomy, versatility, teamwork, technology watch",

        // ===== Certifications =====
        "certifications.ccst": "Cisco Certified Support Technician (CCST) Cybersecurity · expected January 2027",
        "certifications.columbia": "AI Cybersecurity & Governance · Columbia Engineering (online) · 2026 (in progress)",
        "certifications.lsf": "French Sign Language (LSF) - Level 1 · Aix-Marseille University · Spring 2024",
        "certifications.sql": "Learn SQL · Codecademy · Summer 2020",

        // ===== Languages =====
        "languages.title": "Languages",
        "languages.english": "English: native",
        "languages.french": "French: bilingual",
        "languages.spanish": "Spanish: intermediate",
        "languages.arabic": "Arabic: beginner",
        "languages.lsf": "French Sign Language: beginner",

        // ===== Interests =====
        "interests.title": "Interests",
        "interests.tinkering": "Electronics and computer tinkering",
        "interests.foss": "Free and open-source software",
        "interests.retrogaming": "Retro gaming",
        "interests.dj": "DJing, music production and mixing",
        "interests.radio": "Radio",
        "interests.scifi": "Science fiction",
        "interests.outdoors": "Bike touring and hiking",

        // ===== Contact =====
        "contact.title": "Contact me",
        "contact.fname": "First name:",
        "contact.lname": "Last name:",
        "contact.email": "Email:",
        "contact.phone": "Phone:",
        "contact.message": "Questions / Comments:",

        // ===== Footer =====
        "footer.top": "↑ Back to top ↑",
        "footer.credits": "Chase Angelo RODRIQUES ROQUE - 2026 - Made with HTML/CSS/JS",

        // ===== Attributes (for a later step) =====
        "attr.title": "Chase Angelo RODRIQUES ROQUE, Cybersecurity student",
        "attr.photo": "Photo of Chase Angelo RODRIQUES ROQUE",
        "attr.theme": "Light mode",
        "attr.submit": "> send",
        "attr.reset": "> clear",
    },
};