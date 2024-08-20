import { useTranslation } from "react-i18next";
import { container } from "./animations";
import { Container, Icon, Text, Wrapper } from "./styles";

export const GoAboutOrganism = () => {
  const [t] = useTranslation("home");

  return (
    <Container to={t("aboutHref")}>
      <Wrapper whileHover="hover" variants={container}>
        <Text>{t("aboutButton")}</Text>
        <Icon />
      </Wrapper>
    </Container>
  );
};
