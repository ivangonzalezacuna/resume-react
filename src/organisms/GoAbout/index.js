import React from "react";
import { useTranslation } from "react-i18next";
import { container } from "./animations";
import { Container, Icon, Text, Wrapper } from "./GoAboutElements";

const GoAbout = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  const [t] = useTranslation("data");
  var data = t("home", { returnObjects: true });

  return (
    <>
      <Container to={data.goAboutLink} onClick={updateFastTransition(true)}>
        <Wrapper
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={container(isFirstMount, fastTransition)}
        >
          <Text>{data.goAboutText}</Text>
          <Icon />
        </Wrapper>
      </Container>
    </>
  );
};

export default GoAbout;
