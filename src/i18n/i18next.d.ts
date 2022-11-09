// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import navigation from "./locales/en/navigation.json";
import home from "./locales/en/home.json";
import about from "./locales/en/about.json";
import contact from "./locales/en/contact.json";
import work from "./locales/en/work.json";
import education from "./locales/en/education.json";
import footer from "./locales/en/footer.json";
import notFound from "./locales/en/404.json";
import skills from "./locales/common/skills.json";
import social from "./locales/common/social.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom resources type
    resources: {
      nav: typeof navigation;
      home: typeof home;
      about: typeof about;
      contact: typeof contact;
      work: typeof work;
      education: typeof education;
      footer: typeof footer;
      notFound: typeof notFound;
      skills: typeof skills;
      social: typeof social;
    };
  }
}
