export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
};
