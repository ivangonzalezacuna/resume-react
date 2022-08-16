export interface TestItem {
  value: string;
}

export interface Translation {
  nav: NavigationTranslation;
  home: HomeTranslation;
  about: AboutTranslation;
  contact: ContactTranslation;
  work: ExperienceTranslation;
  education: ExperienceTranslation;
  footer: FooterTranslation;
  notFound: NotFoundTranslation;
  skills: SkillsTranslation;
  social: SocialLinksTranslation;
}

export interface HomeTranslation {
  name: string;
  description: string;
  contactHref: string;
  contactButton: string;
  aboutHref: string;
  aboutButton: string;
}

export interface AboutTranslationInfo {
  intro: string;
  name: string;
  description: string;
}

export interface AboutTranslation {
  sectionTitle: string;
  profileAlt: string;
  resumeLang: string;
  resumeButton: string;
  info: AboutTranslationInfo;
}

export interface ContactTranslationInfo {
  type: string;
  text: string;
  value: string;
  href: string;
}

export interface ContactFormTranslation {
  sectionTitle: string;
  successMessage: string;
  labelName: string;
  labelEmail: string;
  labelSubject: string;
  labelMessage: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderSubject: string;
  placeholderMessage: string;
  sendButton: string;
}

export interface ContactTranslation {
  sectionTitle: string;
  info: ContactTranslationInfo[];
  form: ContactFormTranslation;
}

export interface ExperienceTranslationInfo {
  location: string;
  responsibility: string;
  description: string[];
  start: string;
  end: string;
}

export interface ExperienceTranslation {
  sectionTitle: string;
  info: ExperienceTranslationInfo[];
}

export interface SkillsTranslationInfo {
  name: string;
  level: number;
}

export interface SkillsTranslation {
  sectionTitle: string;
  info: SkillsTranslationInfo[];
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface SocialLinksTranslation {
  links: SocialLink[];
}

export interface FooterTranslation {
  text: string;
}

export interface NotFoundTranslation {
  text: string;
  href: string;
}

export interface NavigationTranslationInfo {
  title: string;
  href: string;
}

export interface NavigationTranslation {
  info: NavigationTranslationInfo[];
}
