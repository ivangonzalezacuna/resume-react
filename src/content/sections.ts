export const SECTIONS = [
  "hero",
  "experience",
  "projects",
  "skills",
  "about",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const NAV_LINKS = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const satisfies readonly { label: string; id: SectionId }[];
