import { useState, useEffect } from "react";

const SECTIONS = [
  "hero",
  "experience",
  "projects",
  "skills",
  "about",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const useActiveSection = (): SectionId => {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    const ratios = new Map<SectionId, number>(SECTIONS.map((id) => [id, 0]));

    const updateActive = () => {
      let best: SectionId = "hero";
      let bestRatio = -1;
      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      });
      setActive(best);
    };

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = SECTIONS.find((section) => section === entry.target.id);
          if (id) ratios.set(id, entry.intersectionRatio);
        });
        updateActive();
      },
      { threshold: thresholds },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
};
