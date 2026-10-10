import type { MouseEvent } from "react";
import { useEffect, useRef } from "react";
import { SectionId } from "../../hooks/useActiveSection";
import { scrollToSection } from "../../utils/scrollToSection";
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
  closeForDesktop: () => void;
  activeSection: SectionId;
}

export const Sidebar = ({
  isOpen,
  close,
  closeForDesktop,
  activeSection,
}: SidebarProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    const links = dialog?.querySelectorAll<HTMLElement>("a[href]");
    links?.[0]?.focus();
    document.body.style.overflow = "hidden";
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeForDesktop();
    };
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key !== "Tab" || !dialog || !links?.length) return;

      const first = links[0];
      const last = links[links.length - 1];
      const focusIsOutsideDialog = !dialog.contains(document.activeElement);

      if (e.shiftKey && (document.activeElement === first || focusIsOutsideDialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || focusIsOutsideDialog)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    desktopMediaQuery.addEventListener("change", handleViewportChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopMediaQuery.removeEventListener("change", handleViewportChange);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused?.getClientRects().length) previouslyFocused.focus();
    };
  }, [isOpen, close, closeForDesktop]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    scrollToSection(id);
    close();
  };

  return (
    <>
      {isOpen && (
        <div
          className={sidebarOverlay}
          onClick={close}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-navigation"
        ref={dialogRef}
        className={sidebarContainer[isOpen ? "open" : "closed"]}
        role="dialog"
        aria-modal="true"
        inert={!isOpen || undefined}
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
