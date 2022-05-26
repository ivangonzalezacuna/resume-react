import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import navEs from "./locales/es/navigation.json";
import homeEs from "./locales/es/home.json";
import aboutEs from "./locales/es/about.json";
import contactEs from "./locales/es/contact.json";
import workEs from "./locales/es/work.json";
import educationEs from "./locales/es/education.json";
import footerEs from "./locales/es/footer.json";
import notFoundEs from "./locales/es/404.json";
import navEn from "./locales/en/navigation.json";
import homeEn from "./locales/en/home.json";
import aboutEn from "./locales/en/about.json";
import contactEn from "./locales/en/contact.json";
import workEn from "./locales/en/work.json";
import educationEn from "./locales/en/education.json";
import footerEn from "./locales/en/footer.json";
import notFoundEn from "./locales/en/404.json";
import skills from "./locales/common/skills.json";
import social from "./locales/common/social.json";
import { Translation } from "./types";

const es_resource: Translation | Resource = {
  nav: navEs,
  home: homeEs,
  about: aboutEs,
  contact: contactEs,
  work: workEs,
  education: educationEs,
  footer: footerEs,
  notFound: notFoundEs,
  skills: skills,
  social: social,
};

const en_resource: Translation | Resource = {
  nav: navEn,
  home: homeEn,
  about: aboutEn,
  contact: contactEn,
  work: workEn,
  education: educationEn,
  footer: footerEn,
  notFound: notFoundEn,
  skills: skills,
  social: social,
};

const resources = {
  en: en_resource as Resource,
  "en-US": en_resource as Resource,
  es: es_resource as Resource,
  "es-ES": es_resource as Resource,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "en-US", "es", "es-ES"],
    debug: false,
    resources: resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
