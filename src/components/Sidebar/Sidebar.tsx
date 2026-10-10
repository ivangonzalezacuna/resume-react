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
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const dialog = dialogRef.current;
    const focusableElements = dialog?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
    );
    focusableElements?.item(0)?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key !== "Tab" || !dialog) return;
      if (!focusableElements?.length) {
        e.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusableElements.item(0);
      const last = focusableElements.item(focusableElements.length - 1);
      if (!dialog.contains(document.activeElement)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
      previouslyFocused.current = null;
    };
  }, [isOpen, close]);

  return (
    <>
      {isOpen && (
        <div className={sidebarOverlay} onClick={close} aria-hidden="true" />
      )}
      <div
        ref={dialogRef}
        className={sidebarContainer[isOpen ? "open" : "closed"]}
        role="dialog"
        aria-modal={isOpen || undefined}
        inert={!isOpen || undefined}
        tabIndex={-1}
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
              onClick={close}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
