import type { MouseEvent } from "react";
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
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <>
      {isOpen && <div className={sidebarOverlay} onClick={close} />}
      <div className={sidebarContainer[isOpen ? "open" : "closed"]}>
        <nav className={sidebarNav}>
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
