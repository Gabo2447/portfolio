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
    title: "",
    subtitle: "",
    type: "",
    buttons: [],
  },
  about: {
    title: "",
    icon: "",
    subtitle: "",
    type: "",
    buttons: [],
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
    description: [],
    icon: "",
    topButton: "",
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
