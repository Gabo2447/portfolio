import type {
  AboutContent,
  ContactContent,
  ErrorContent,
  FooterContent,
  HeaderContent,
  HomePageContent,
  ProjectsContent,
  SiteTranslation,
} from "@/types/i18n";

const prefix = import.meta.env.BASE_URL;

const nav: HeaderContent = {
  buttonContact: "Contáctame",
  buttonLink: `${prefix}/contact-me`,
  dropdownTitle: "Lenguaje",
  nav: [
    { title: "Inicio", href: `${prefix}/` },
    { title: "Acerca de mí", href: `${prefix}/about-me` },
    { title: "Proyectos", href: `${prefix}/projects` },
  ],
};

const footer: FooterContent = {
  inicio: [
    { title: "Acerca de mí", href: `${prefix}/about-me` },
    { title: "Proyectos", href: `${prefix}/projects` },
  ],
  contacto: [
    { title: "Correo", href: "mailto:gabrieldeolival2@gmail.com" },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/gabo2447/",
      target: "_blank",
    },
  ],
};

const contact: ContactContent = {
  title: "¡Hablemos!",
  description:
    "Si estás interesado en mi trabajo o tienes alguna inquietud, ¡no dudes en escribirme!",
  form: {
    fields: {
      name: {
        label: "Tu nombre",
        placeholder: "Nombre",
        required: true,
        type: "text",
      },
      email: {
        label: "Tu E-mail",
        placeholder: "ejemplo@email.com",
        required: true,
        type: "email",
      },
      message: {
        label: "Tu mensaje",
        placeholder: "Hey...",
        required: true,
        type: "textarea",
      },
    },
    submitButton: "Enviar",
  },
};

const home: HomePageContent = {
  hero: {
    title:
      "Soy <span class='text-chart-2'>Gabriel De Olival</span> <br /> Programador Backend",
    subtitle:
      "Especializado en diseñar e implementar arquitecturas escalables, APIs REST robustas y optimización de bases de datos para aplicaciones de alto rendimiento.",
    type: "hero-main",
    buttons: [
      {
        href: `${prefix}/projects`,
        name: "Ver proyectos",
        size: "lg",
        target: "_self",
        variant: "default",
        icon: "book",
      },
      {
        href: `${prefix}/cv.pdf`,
        name: "Descargar CV",
        size: "lg",
        target: "_blank",
        variant: "secondary",
        icon: "download",
      },
    ],
  },
  about: {
    badge: "Backend Developer | Java & Spring Boot",
    title: "Construyendo sistemas escalables y APIs robustas",
    imageSrc: "",
    description:
      "Hola, soy Gabriel. Desarrollador enfocado en el diseño de arquitecturas backend, APIs RESTful y optimización de bases de datos. Me apasiona escribir código limpio, aplicar buenas prácticas (SOLID) y resolver problemas complejos en el lado del servidor.",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Microservicios",
      "Git",
    ],
    githubUrl: "https://github.com/Gabo2447",
    linkedinUrl: "https://linkedin.com/in/Gabo2447",
    cvUrl: `${prefix}/cv.pdf`,
  },
  skills: {
    title: "",
    cards: [],
    buttons: [],
  },
  projects: {
    title: "",
    cards: [],
    buttons: [],
  },
};

const about: AboutContent = {
  hero: {
    title: "",
    description: "",
    badge: "",
    imageSrc: "",
    stack: [],
  },
  skills: {
    title: "",
    cards: [],
    buttons: [],
  },
  software: {
    title: "",
    cards: [],
  },
  experience: {
    title: "",
    cards: [],
  },
  tools: {
    title: "",
    cards: [],
  },
  buttons: [],
};

const projects: ProjectsContent = {
  hero: {
    topButton: "",
    title: "",
  },
  projects: {
    title: "",
    cards: [],
  },
};

const error: ErrorContent = {
  code: 404,
  title: "Página no encontrada",
  description:
    "El enlace que seguiste tal vez está roto o la página ha sido movida a otra ubicación.",
  buttons: [
    {
      name: "Volver al inicio",
      href: `${prefix}/`,
      variant: "default",
    },
  ],
};

export const ESLang: SiteTranslation = {
  footer: footer,
  navbar: nav,
  prefix: prefix,
  sections: {
    about: about,
    contact: contact,
    errorPage: error,
    home: home,
    projects: projects,
  },
};
