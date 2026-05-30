export type ContactFormOrganismProps = {
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type SkillInfo = {
  name: string;
  level: number;
};

export type ExperienceInfo = {
  college: string;
  location: string;
  degree: string;
  description: string[];
  duration: string;
  technologies: string[];
};

export type WorkInfo = {
  company: string;
  location: string;
  duration: string;
  roles: {
    title: string;
    description: string[];
    duration: string;
  }[];
  technologies: string[];
};
