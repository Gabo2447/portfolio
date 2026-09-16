export type ButtonVariant =
  "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";

export type LinkTarget =
  "_blank" | "_self" | "_parent" | "_top" | (string & {});

export interface Link {
  title: string;
  href: string;
  target?: LinkTarget;
}

export interface ButtonConfig {
  name: string;
  variant?: ButtonVariant;
  href: string;
  icon?: string;
  target?: LinkTarget;
}

export interface FormFieldText {
  label: string;
  placeholder: string;
}

export interface ContactFormText {
  title?: string;
  name: FormFieldText;
  email: FormFieldText;
  message: FormFieldText;
  submitButton: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ToolCard {
  icon: string;
  name: string;
  description?: string;
  stars?: number;
}

export interface ExperienceCard {
  company: string;
  role: string;
  period: string;
  description?: string;
  icon?: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  demoUrl?: string;
  repoUrl?: string;
  buttons?: ButtonConfig[];
}

export interface HeaderContent {
  buttonContact: string;
  buttonLink: string;
  dropdownTitle: string;
  nav: Link[];
}

export interface FooterContent {
  [key: string]: Link[];
}

export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    type: string;
    buttons?: ButtonConfig[];
  };
  about: {
    title: string;
    icon: string;
    subtitle: string;
    type: string;
    buttons?: ButtonConfig[];
  };
  skills: {
    title: string;
    cards: FeatureCard[];
    buttons?: ButtonConfig[];
  };
  projects: {
    title: string;
    cards: ProjectCard[];
    buttons?: ButtonConfig[];
  };
}

export interface AboutContent {
  hero: {
    title: string;
    description: string[];
    icon: string;
    topButton: string;
  };
  skills: {
    title: string;
    cards: FeatureCard[];
    buttons?: ButtonConfig[];
  };
  software: {
    title: string;
    cards: ToolCard[];
  };
  experience: {
    title: string;
    cards: ExperienceCard[];
  };
  tools: {
    title: string;
    cards: ToolCard[];
  };
  buttons?: ButtonConfig[];
}

export interface ProjectsContent {
  hero: {
    topButton: string;
    title: string;
  };
  projects: {
    title: string;
    cards: ProjectCard[];
  };
}

export interface ContactContent {
  title: string;
  description: string;
  form: ContactFormText;
}

export interface ErrorContent {
  code: number;
  title: string;
  description: string;
  buttons?: ButtonConfig[];
}

export interface SiteTranslation {
  navbar: HeaderContent;
  footer: FooterContent;
  prefix: string;
  sections: {
    home: HomePageContent;
    about: AboutContent;
    projects: ProjectsContent;
    contact: ContactContent;
    errorPage: ErrorContent;
  };
}
