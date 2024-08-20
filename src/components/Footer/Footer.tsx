import { useTranslation } from "react-i18next";
import {
  Copyright,
  FooterContainer,
  FooterWrap,
  Logo,
  LogoImg,
} from "./styles";
import { RiCopyrightLine } from "react-icons/ri";
import LogoSvg from "../../images/background/logo.svg";
import { ResumeIcon } from "../../atoms";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [t] = useTranslation("footer");

  return (
    <FooterContainer>
      <FooterWrap>
        <Logo onClick={scrollToTop}>
          <LogoImg src={LogoSvg} alt="logo" />
        </Logo>
        <Copyright>
          <RiCopyrightLine style={{ marginRight: "4px" }} />
          {new Date().getFullYear()} {t("text")}
        </Copyright>
        <ResumeIcon social row />
      </FooterWrap>
    </FooterContainer>
  );
};
