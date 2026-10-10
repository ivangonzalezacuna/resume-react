import { useState, useEffect } from "react";
import { SECTIONS, type SectionId } from "../content/sections";

export const useActiveSection = (): SectionId => {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    const ratios = new Map<string, number>(SECTIONS.map((id) => [id, 0]));

    const updateActive = () => {
      let best: SectionId = "hero";
      let bestRatio = -1;
      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id as SectionId;
        }
      });
      setActive(best);
    };

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
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
