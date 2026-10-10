import { useState, useEffect, useCallback, useRef } from "react";
import { Logo } from "../Logo";
import { Sidebar } from "../Sidebar";
import { useActiveSection } from "../../hooks/useActiveSection";
import { NAV_LINKS } from "../../content/sections";
import type { SectionId } from "../../content/sections";
import { scrollToSection } from "../../utils/scrollToSection";
import portfolio from "../../content/portfolio";
import {
  nav,
  navInner,
  navLinks,
  navItem,
  socialLinks,
  socialLink,
  hamburgerButton,
} from "./Navbar.css";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeSection = useActiveSection();
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const firstDesktopNavLink = useRef<HTMLAnchorElement>(null);
  const closeSidebarForDesktop = useCallback(() => {
    closeSidebar();
    window.requestAnimationFrame(() => firstDesktopNavLink.current?.focus());
  }, [closeSidebar]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: SectionId,
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <>
      <nav
        className={nav[scrolled ? "scrolled" : "default"]}
        aria-label="Primary navigation"
      >
        <div className={navInner}>
          <Logo onClose={() => setSidebarOpen(false)} />
          <div className={navLinks}>
            {NAV_LINKS.map(({ label, id }) => (
              <a
                key={id}
                ref={id === "experience" ? firstDesktopNavLink : undefined}
                href={`#${id}`}
                className={navItem[activeSection === id ? "active" : "default"]}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </a>
            ))}
          </div>
          <div className={socialLinks}>
            <a
              className={socialLink}
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub size={18} aria-hidden="true" />
            </a>
            <a
              className={socialLink}
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={18} aria-hidden="true" />
            </a>
          </div>
          <button
            className={hamburgerButton}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={sidebarOpen}
            aria-controls="mobile-navigation"
            onClick={() => setSidebarOpen((v) => !v)}
          >
            {sidebarOpen ? (
              <FiX size={22} aria-hidden="true" />
            ) : (
              <FiMenu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <Sidebar
        isOpen={sidebarOpen}
        close={closeSidebar}
        closeForDesktop={closeSidebarForDesktop}
        activeSection={activeSection}
      />
    </>
  );
};
