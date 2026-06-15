import { useState, useEffect } from "react";
import { Logo } from "../Logo";
import { Sidebar } from "../Sidebar";
import { useActiveSection, SectionId } from "../../hooks/useActiveSection";
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

const NAV_LINKS: { label: string; id: SectionId }[] = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeSection = useActiveSection();

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={nav[scrolled ? "scrolled" : "default"]}>
        <div className={navInner}>
          <Logo />
          <div className={navLinks}>
            {NAV_LINKS.map(({ label, id }) => (
              <a
                key={id}
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
              <FiGithub size={18} />
            </a>
            <a
              className={socialLink}
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
          <button
            className={hamburgerButton}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen((v) => !v)}
          >
            {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
      <Sidebar
        isOpen={sidebarOpen}
        close={() => setSidebarOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
