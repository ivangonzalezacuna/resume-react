import portfolio from "../../content/portfolio";
import { Logo } from "../Logo";
import {
  FooterContainer,
  FooterInner,
  FooterLeft,
  FooterRight,
  CopyrightText,
  FooterLink,
} from "./styles";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        <FooterLeft>
          <Logo />
          <CopyrightText>&copy; {year} Iván González Acuña</CopyrightText>
        </FooterLeft>
        <FooterRight>
          <FooterLink
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub size={18} />
          </FooterLink>
          <FooterLink
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin size={18} />
          </FooterLink>
          <FooterLink
            href={`mailto:${portfolio.social.email}`}
            aria-label="Send email"
          >
            <FiMail size={18} />
          </FooterLink>
        </FooterRight>
      </FooterInner>
    </FooterContainer>
  );
};
