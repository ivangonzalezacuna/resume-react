export type HeaderProps = {
  isFirstMount: boolean;
  fastTransition: boolean;
  setFastTransition: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NavbarProps = {
  hideNav: boolean;
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFastTransition: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SidebarProps = {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFastTransition: React.Dispatch<React.SetStateAction<boolean>>;
};

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
  responsibility: string;
  description: string[];
  start: string;
  end: string;
};
