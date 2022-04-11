import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Background,
  Content,
  Name,
  Description,
  Contact,
  Social,
} from "./HeaderDataElements";
import HeaderBg from "../../images/background/header.svg";
import { LinkButton } from "../../atoms/Button";
import SocialIcons from "../../atoms/SocialIcons";
import { container, icons, item } from "./animations";

const HeaderData = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  const [t] = useTranslation("data");
  var data = t("home", { returnObjects: true });

  return (
    <>
      <Container
        initial="initial"
        animate="animate"
        variants={container(isFirstMount, fastTransition)}
      >
        <Background src={HeaderBg} alt="header" />
        <Content>
          <Name variants={item}>{data.name}</Name>
          <Description variants={item}>{data.description}</Description>
          <Contact>
            <LinkButton
              variants={item}
              to={data.buttonLink}
              onClick={updateFastTransition(true)}
            >
              {data.buttonText}
            </LinkButton>
            <Social>
              <SocialIcons row header variants={icons} />
            </Social>
          </Contact>
        </Content>
      </Container>
    </>
  );
};

export default HeaderData;
