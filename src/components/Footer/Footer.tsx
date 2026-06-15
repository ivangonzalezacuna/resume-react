import portfolio from "../../content/portfolio";
import { Logo } from "../Logo";
import {
  footerContainer,
  footerInner,
  footerLeft,
  footerRight,
  copyrightText,
  footerLink,
} from "./Footer.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={footerContainer}>
      <div className={footerInner}>
        <div className={footerLeft}>
          <Logo />
          <small className={copyrightText}>
            &copy; {year} Iván González Acuña
          </small>
        </div>
        <div className={footerRight}>
          <a
            className={footerLink}
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub size={18} />
          </a>
          <a
            className={footerLink}
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            className={footerLink}
            href={`mailto:${portfolio.social.email}`}
            aria-label="Send email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
