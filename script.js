/* ==================================================
   LANGUAGE SELECTION
   ================================================== */

function selectLanguage(language) {


    /* Get the two main screens */

    const languageScreen =
        document.getElementById("language-screen");

    const website =
        document.getElementById("website");


    /* Get the learning notice */

    const notice =
        document.getElementById("learning-notice");


    /*
       Remove the language-selection screen
       and show the actual website.
    */

    languageScreen.style.display = "none";

    website.style.display = "block";



    /* ==================================================
       ENGLISH
       ================================================== */

    if (language === "en") {


        document.documentElement.lang = "en";


        /* Navigation */

        document.getElementById("nav-home").textContent =
            "Home";

        document.getElementById("nav-about").textContent =
            "About";

        document.getElementById("nav-contact").textContent =
            "Contact";


        /* Home */

        document.getElementById("home-title").textContent =
            "Welcome to My Website";

        document.getElementById("home-text").textContent =
            "Welcome to my website.";


        /* About */

        document.getElementById("about-title").textContent =
            "About";

        document.getElementById("about-text").textContent =
            "About me, my work and my hobbies.";


        /* Contact */

        document.getElementById("contact-title").textContent =
            "Contact";

        document.getElementById("contact-text").textContent =
            "Contact me through.";


        /* No language notice */

        notice.style.display = "none";

    }



    /* ==================================================
       SPANISH
       ================================================== */

    else if (language === "es") {


        document.documentElement.lang = "es";


        /* Navigation */

        document.getElementById("nav-home").textContent =
            "Inicio";

        document.getElementById("nav-about").textContent =
            "Acerca de mí";

        document.getElementById("nav-contact").textContent =
            "Contacto";


        /* Home */

        document.getElementById("home-title").textContent =
            "Bienvenido a mi sitio web";

        document.getElementById("home-text").textContent =
            "Bienvenido a mi sitio web.";


        /* About */

        document.getElementById("about-title").textContent =
            "Acerca de mí";

        document.getElementById("about-text").textContent =
            "Sobre mí, mi trabajo y mis pasatiempos.";


        /* Contact */

        document.getElementById("contact-title").textContent =
            "Contacto";

        document.getElementById("contact-text").textContent =
            "Puedes contactarme a través de.";


        /* Spanish learning notice */

        notice.style.display = "block";

        notice.textContent =
            "Todavía estoy aprendiendo español y trabajando " +
            "para mejorar mis habilidades. Por favor, perdóname " +
            "si no he expresado toda la información en la página " +
            "en español con tanta fluidez o claridad como me gustaría.";

    }



    /* ==================================================
       FRENCH
       ================================================== */

    else if (language === "fr") {


        document.documentElement.lang = "fr";


        /* Navigation */

        document.getElementById("nav-home").textContent =
            "Accueil";

        document.getElementById("nav-about").textContent =
            "À propos";

        document.getElementById("nav-contact").textContent =
            "Contact";


        /* Home */

        document.getElementById("home-title").textContent =
            "Bienvenue sur mon site web";

        document.getElementById("home-text").textContent =
            "Bienvenue sur mon site web.";


        /* About */

        document.getElementById("about-title").textContent =
            "À propos de moi";

        document.getElementById("about-text").textContent =
            "À propos de moi, de mon travail et de mes loisirs.";


        /* Contact */

        document.getElementById("contact-title").textContent =
            "Contact";

        document.getElementById("contact-text").textContent =
            "Vous pouvez me contacter via.";


        /* French learning notice */

        notice.style.display = "block";

        notice.textContent =
            "Je suis encore en train d'apprendre le français " +
            "et de travailler à améliorer mes compétences. " +
            "Veuillez me pardonner si je n'ai pas présenté " +
            "toutes les informations sur la page française " +
            "aussi couramment ou clairement que je le souhaiterais.";

    }

}
