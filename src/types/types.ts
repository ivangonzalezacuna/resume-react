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
  location: string;
  city: string;
  responsibility: string;
  description: string[];
  start: string;
  end: string;
};
