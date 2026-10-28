/* ==========================================================================
   Translations: one key per piece of text, in both languages.
   The key matches the data-i18n attribute in the HTML.
   Loaded before main.js, so setLanguage() can read it.
   ========================================================================== */

const translations = {
    fr: {
        // ===== Tab titles (one per page) =====
        "title.cv": "Chase Angelo RODRIQUES ROQUE, Étudiant en cybersécurité",
        "title.projects": "Projets · Chase Angelo RODRIQUES ROQUE",
        "title.interests": "Intérêts · Chase Angelo RODRIQUES ROQUE",

        // ===== Header =====
        "header.subtitle": "Étudiant en cybersécurité",
        "theme.dark": "SOMBRE",
        "theme.light": "CLAIR",

        // ===== Menu: pages =====
        "nav.page.cv": "CV",
        "nav.page.projects": "Projets",
        "nav.page.interests": "Intérêts",

        // ===== Menu: sections =====
        "nav.overview": "Vue d'ensemble",
        "nav.jobboard": "Job board full-stack",
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
        "profile.cv": "> télécharger mon CV",

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
        "contact.required": "Les champs marqués d'un * sont obligatoires.",

        // ===== Footer =====
        "footer.top": "↑ Haut de page ↑",
        "footer.credits": "Chase Angelo RODRIQUES ROQUE - 2026 - Fait en HTML/CSS/JS",

        // ===== Projects page =====
        "projects.page.title": "Projets techniques",
        "projects.page.intro": "Version détaillée des projets de mon CV.",

        // ===== Projects page: details =====
        "detail.goal": "Objectif",
        "detail.approach": "Démarche",
        "detail.result": "Résultat",
        "detail.meshtastic.goal": "Communiquer de façon chiffrée sans internet ni opérateur, grâce à un réseau radio maillé.",
        "detail.meshtastic.step1": "Montage du nœud : carte LoRa, antenne, alimentation",
        "detail.meshtastic.step2": "Flashage du firmware et paramétrage : région et fréquence (868 MHz en Europe), canaux, rôle du nœud",
        "detail.meshtastic.step3": "Chiffrement des échanges avec des clés de canal",
        "detail.meshtastic.result": "Messages échangés entre nœuds hors réseau, tests de portée selon l'emplacement et l'antenne, et création d'un club Meshtastic à Epitech.",
        "detail.homelab.goal": "Disposer d'un environnement personnel pour pratiquer l'administration système et la sécurité sans risque.",
        "detail.homelab.step1": "Installation d'un serveur Linux servant de NAS",
        "detail.homelab.step2": "Durcissement : SSH par clé uniquement, pare-feu, gestion des correctifs",
        "detail.homelab.step3": "Labo virtualisé (Kali Linux, Exegol sous Docker) pour tester outils et configurations",
        "detail.homelab.result": "Un serveur durci au quotidien et un labo isolé, réutilisé pour mon cours de test d'intrusion et Hack The Box.",
        "detail.ai.goal": "Utiliser des modèles de langage sans envoyer mes données à un service tiers.",
        "detail.ai.step1": "Déploiement et comparaison de LLM en local : Ollama, Jan, GPT4All",
        "detail.ai.step2": "Accès aux fichiers restreint selon le principe du moindre privilège",
        "detail.ai.step3": "Choix et réglage des modèles selon les ressources de la machine",
        "detail.ai.result": "Des modèles qui tournent entièrement en local : les données ne quittent jamais la machine.",
        "detail.jobboard.goal": "Créer en binôme un site d'offres d'emploi complet, avec trois rôles : candidat, employeur et administrateur.",
        "detail.jobboard.step1": "Base de données PostgreSQL : 5 tables liées, avec contraintes",
        "detail.jobboard.step2": "API Flask de 25 routes, connexion par jeton JWT",
        "detail.jobboard.step3": "Sécurité : mots de passe hachés et salés, rôles vérifiés sur chaque route, requêtes SQL paramétrées",
        "detail.jobboard.step4": "Puis design visuel du front React en appui de mon binôme",
        "detail.jobboard.result": "Projet noté 26/26, avec une démo en ligne.",
        "detail.console.goal": "Construire moi-même une console de jeux rétro portable.",
        "detail.console.step1": "Assemblage d'un Raspberry Pi Zero 2 W et d'un HAT manette avec écran",
        "detail.console.step2": "Installation de RetroPie sous Linux : image système, émulateurs",
        "detail.console.step3": "Mappage des boutons de la manette",
        "detail.console.result": "Une console portable fonctionnelle, montée et configurée de A à Z.",
        "detail.htb.goal": "M'entraîner au test d'intrusion sur des machines prévues pour, dans un cadre légal.",
        "detail.htb.step1": "Challenges hacking, web, réseau et forensic",
        "detail.htb.step2": "Environnement d'attaque Exegol sous Docker",
        "detail.htb.result": "Niveau 9 atteint. Profil :",

        // ===== Interests page =====
        "interests.page.title": "Centres d'intérêt",
        "interests.page.intro": "Mes projets personnels en dehors de la cybersécurité.",

        // ===== Shared =====
        "placeholder": "Contenu à venir.",

        // ===== Attributes (set with data-i18n-attr) =====
        "attr.photo": "Photo de Chase Angelo RODRIQUES ROQUE",
        "attr.theme": "Mode clair",
        "attr.submit": "> envoyer",
        "attr.reset": "> effacer",
    },

    en: {
        // ===== Tab titles (one per page) =====
        "title.cv": "Chase Angelo RODRIQUES ROQUE, Cybersecurity student",
        "title.projects": "Projects · Chase Angelo RODRIQUES ROQUE",
        "title.interests": "Interests · Chase Angelo RODRIQUES ROQUE",

        // ===== Header =====
        "header.subtitle": "Cybersecurity student",
        "theme.dark": "DARK",
        "theme.light": "LIGHT",

        // ===== Menu: pages =====
        "nav.page.cv": "CV",
        "nav.page.projects": "Projects",
        "nav.page.interests": "Interests",

        // ===== Menu: sections =====
        "nav.overview": "Overview",
        "nav.jobboard": "Full-stack job board",
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
        "profile.cv": "> download my CV",

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
        "contact.required": "Fields marked with * are required.",

        // ===== Footer =====
        "footer.top": "↑ Back to top ↑",
        "footer.credits": "Chase Angelo RODRIQUES ROQUE - 2026 - Made with HTML/CSS/JS",

        // ===== Projects page =====
        "projects.page.title": "Technical projects",
        "projects.page.intro": "Detailed version of the projects on my CV.",

        // ===== Projects page: details =====
        "detail.goal": "Goal",
        "detail.approach": "Approach",
        "detail.result": "Result",
        "detail.meshtastic.goal": "Communicate securely without internet or a carrier, through a radio mesh network.",
        "detail.meshtastic.step1": "Built the node: LoRa board, antenna, power supply",
        "detail.meshtastic.step2": "Flashed the firmware and configured it: region and frequency (868 MHz in Europe), channels, node role",
        "detail.meshtastic.step3": "Encrypted messages with channel keys",
        "detail.meshtastic.result": "Messages exchanged between nodes off-grid, range tested by location and antenna, and founded a Meshtastic club at Epitech.",
        "detail.homelab.goal": "Have a personal environment to practice system administration and security without risk.",
        "detail.homelab.step1": "Set up a Linux server used as a NAS",
        "detail.homelab.step2": "Hardening: key-only SSH, firewall, patch management",
        "detail.homelab.step3": "Virtualized lab (Kali Linux, Exegol on Docker) to test tools and configurations",
        "detail.homelab.result": "A hardened server in daily use and an isolated lab, reused for my penetration testing course and Hack The Box.",
        "detail.ai.goal": "Use language models without sending my data to a third-party service.",
        "detail.ai.step1": "Deployed and compared local LLMs: Ollama, Jan, GPT4All",
        "detail.ai.step2": "Restricted file access following the principle of least privilege",
        "detail.ai.step3": "Chose and tuned models for the machine's resources",
        "detail.ai.result": "Models that run entirely locally: data never leaves the machine.",
        "detail.jobboard.goal": "Build a complete job board as a pair, with three roles: candidate, employer and administrator.",
        "detail.jobboard.step1": "PostgreSQL database: 5 linked tables, with constraints",
        "detail.jobboard.step2": "Flask API with 25 routes, JWT token login",
        "detail.jobboard.step3": "Security: salted, hashed passwords, roles checked on every route, parameterized SQL queries",
        "detail.jobboard.step4": "Then visual design of the React front end, supporting my partner",
        "detail.jobboard.result": "Graded 26/26, with a live demo.",
        "detail.console.goal": "Build my own portable retro gaming console.",
        "detail.console.step1": "Assembled a Raspberry Pi Zero 2 W and a gamepad HAT with a screen",
        "detail.console.step2": "Installed RetroPie on Linux: system image, emulators",
        "detail.console.step3": "Mapped the gamepad buttons",
        "detail.console.result": "A working handheld console, built and configured from scratch.",
        "detail.htb.goal": "Practice penetration testing on machines built for it, within a legal framework.",
        "detail.htb.step1": "Hacking, web, network and forensics challenges",
        "detail.htb.step2": "Exegol attack environment on Docker",
        "detail.htb.result": "Reached level 9. Profile:",

        // ===== Interests page =====
        "interests.page.title": "Interests",
        "interests.page.intro": "My personal projects outside cybersecurity.",

        // ===== Shared =====
        "placeholder": "Coming soon.",

        // ===== Attributes (set with data-i18n-attr) =====
        "attr.photo": "Photo of Chase Angelo RODRIQUES ROQUE",
        "attr.theme": "Light mode",
        "attr.submit": "> send",
        "attr.reset": "> clear",
    },
};