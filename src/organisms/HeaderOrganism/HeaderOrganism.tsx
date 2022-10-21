import { useTranslation } from "react-i18next";
import { HeaderProps } from "../../types";
import { container, icons, item } from "./animations";
import {
  Background,
  Contact,
  Container,
  Content,
  Description,
  Name,
  Social,
} from "./styles";
import HeaderBg from "../../images/background/header.svg";
import { LinkButton, ResumeIcon } from "../../atoms";

export const HeaderOrganism = ({
  fastTransition,
  isFirstMount,
  setFastTransition,
}: HeaderProps) => {
  const [t] = useTranslation("home");

  return (
    <>
      <Container
        initial="initial"
        animate="animate"
        variants={container(isFirstMount, fastTransition)}
      >
        <Background src={HeaderBg} alt="header" />
        <Content>
          <Name variants={item}>{t("name")}</Name>
          <Description variants={item}>{t("description")}</Description>
          <Contact>
            <LinkButton
              variants={item}
              to={t("contactHref")}
              onClick={() => setFastTransition(true)}
            >
              {t("contactButton")}
            </LinkButton>
            <Social>
              <ResumeIcon social row header variants={icons} />
            </Social>
          </Contact>
        </Content>
      </Container>
    </>
  );
};
