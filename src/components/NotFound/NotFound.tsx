import { useTranslation } from "react-i18next";
import { HrefButton } from "../../atoms";
import LogoSvg from "../../images/background/logo.svg";
import NotFoundAnimation from "../../images/lottie/404.json";
import { button, container } from "./animations";
import { Animation, Container, Logo, LogoWrap } from "./styles";

export const NotFound = () => {
  const [t] = useTranslation("notFound");

  return (
    <Container initial="initial" animate="animate" variants={container}>
      <LogoWrap>
        <Logo src={LogoSvg} alt="logo" />
      </LogoWrap>
      <Animation loop play animationData={NotFoundAnimation} />
      <HrefButton href={t("href")} variants={button}>
        {t("text")}
      </HrefButton>
    </Container>
  );
};
