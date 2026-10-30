/* Language preference persists across refreshes in this browser. */
const LANGUAGE_KEY = "professionalWebsiteLanguage";

const translations = {
  en: {
    navHome: "Home", navAbout: "About", navTimeline: "Timeline", navCoursework: "Coursework",
    navSkills: "Skills", navResearch: "Research", navWriting: "Writing", navContact: "Contact",
    heroEyebrow: "RESEARCH · DATA · PEOPLE",
    heroIntro: "A portfolio bringing together quantitative research, data science, teaching, and writing.*DECLARATION : AI was used to polish the code used for creating this portfolio",
    exploreJourney: "Explore my journey", getInTouch: "Get in touch ↗",
    aboutHeading: "A multidisciplinary path", timelineHeading: "A connected journey",
    courseworkHeading: "Academic foundation", skillsHeading: "Skills & methods",
    researchHeading: "Research, publications & data", writingHeading: "Beyond technical work"
  },
  es: {
    navHome: "Inicio", navAbout: "Sobre mí", navTimeline: "Trayectoria", navCoursework: "Cursos",
    navSkills: "Habilidades", navResearch: "Investigación", navWriting: "Escritura", navContact: "Contacto",
    heroEyebrow: "INVESTIGACIÓN · DATOS · PERSONAS",
    heroIntro: "Un portafolio que reúne investigación cuantitativa, ciencia de datos, docencia y escritura.*DECLARATION : AI was used to polish the code used for creating this portfolio",
    exploreJourney: "Explorar mi trayectoria", getInTouch: "Contactar ↗",
    aboutHeading: "Una trayectoria multidisciplinaria", timelineHeading: "Una trayectoria conectada",
    courseworkHeading: "Formación académica", skillsHeading: "Habilidades y métodos",
    researchHeading: "Investigación, publicaciones y datos", writingHeading: "Más allá del trabajo técnico"
  },
  fr: {
    navHome: "Accueil", navAbout: "À propos", navTimeline: "Parcours", navCoursework: "Cours",
    navSkills: "Compétences", navResearch: "Recherche", navWriting: "Écriture", navContact: "Contact",
    heroEyebrow: "RECHERCHE · DONNÉES · PERSONNES",
    heroIntro: "Un portfolio réunissant recherche quantitative, science des données, enseignement et écriture.*DECLARATION : AI was used to polish the code used for creating this portfolio",
    exploreJourney: "Découvrir mon parcours", getInTouch: "Me contacter ↗",
    aboutHeading: "Un parcours pluridisciplinaire", timelineHeading: "Un parcours connecté",
    courseworkHeading: "Formation académique", skillsHeading: "Compétences et méthodes",
    researchHeading: "Recherche, publications et données", writingHeading: "Au-delà du travail technique"
  }
};

function applyLanguage(language) {
  const chosen = translations[language] ? language : "en";
  document.documentElement.lang = chosen;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[chosen][key]) element.textContent = translations[chosen][key];
  });

  /* Storage can be unavailable in some privacy-restricted browser contexts. */
  try {
    localStorage.setItem(LANGUAGE_KEY, chosen);
  } catch (error) {
    // The language still applies for the current page even if persistence is blocked.
  }

  const screen = document.getElementById("language-screen");
  if (screen) screen.hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
  let savedLanguage = null;
  try {
    savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  } catch (error) {
    // Fall back to the language chooser if browser storage is unavailable.
  }

  const languageScreen = document.getElementById("language-screen");
  if (savedLanguage && translations[savedLanguage]) {
    applyLanguage(savedLanguage);
  } else if (languageScreen) {
    languageScreen.hidden = false;
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  const changeLanguage = document.getElementById("change-language");
  if (changeLanguage) {
    changeLanguage.addEventListener("click", () => {
      if (languageScreen) languageScreen.hidden = false;
    });
  }

  document.querySelectorAll(".course-flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      const isExpanded = card.getAttribute("aria-expanded") === "true";
      card.setAttribute("aria-expanded", String(!isExpanded));
    });
  });

  const timelineDetail = document.getElementById("timeline-detail");
  document.querySelectorAll(".circuit-node").forEach((node) => {
    node.addEventListener("click", () => {
      document.querySelectorAll(".circuit-node").forEach((other) => {
        other.setAttribute("aria-expanded", "false");
      });
      node.setAttribute("aria-expanded", "true");
      if (timelineDetail) {
        /* Use DOM text nodes rather than injecting data into innerHTML. */
        timelineDetail.replaceChildren();
        const title = document.createElement("strong");
        title.textContent = node.dataset.title || "Timeline detail";
        const detail = document.createElement("p");
        detail.textContent = node.dataset.detail || "";
        timelineDetail.append(title, detail);
      }
    });
  });
});
