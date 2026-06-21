import type { MouseEvent, KeyboardEvent } from "react";
import { useEffect, useRef } from "react";
import { SectionId } from "../../hooks/useActiveSection";
import {
  sidebarContainer,
  sidebarOverlay,
  sidebarNav,
  sidebarItem,
} from "./Sidebar.css";

const NAV_LINKS: { label: string; id: SectionId }[] = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
  activeSection: SectionId;
}

export const Sidebar = ({ isOpen, close, activeSection }: SidebarProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  const handleOverlayKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      close();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={sidebarOverlay}
          onClick={close}
          onKeyDown={handleOverlayKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}
      <div
        ref={panelRef}
        className={sidebarContainer[isOpen ? "open" : "closed"]}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Navigation menu"
      >
        <nav className={sidebarNav} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={
                sidebarItem[activeSection === id ? "active" : "inactive"]
              }
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
