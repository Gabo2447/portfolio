import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export type LinkTarget =
  "_blank" | "_self" | "_parent" | "_top" | (string & {});

export type InputType =
  "text" | "email" | "password" | "number" | "tel" | "textarea";

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
  size?: ButtonSize;
}

export interface FormFieldText {
  label: string;
  placeholder: string;
  required: boolean;
  type?: InputType;
}

export interface ContactFormText {
  title?: string;
  submitButton: string;
  fields: Record<string, FormFieldText>;
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

export interface AboutSectionContent {
  type?: string;
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  stack: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  cvUrl?: string;
  buttons?: ButtonConfig[];
}

export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    type: string;
    buttons?: ButtonConfig[];
  };
  about: AboutSectionContent;
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
  hero: AboutSectionContent;
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
