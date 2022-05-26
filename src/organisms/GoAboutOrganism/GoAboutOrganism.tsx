import { useTranslation } from "react-i18next";
import { HeaderProps } from "../../types/types";
import { container } from "./animations";
import { Container, Icon, Text, Wrapper } from "./styles";

export const GoAboutOrganism = ({
  isFirstMount,
  fastTransition,
  setFastTransition,
}: HeaderProps) => {
  const [t] = useTranslation("home");

  return (
    <>
      <Container to={t("aboutHref")} onClick={() => setFastTransition(true)}>
        <Wrapper
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={container(isFirstMount, fastTransition)}
        >
          <Text>{t("aboutButton")}</Text>
          <Icon />
        </Wrapper>
      </Container>
    </>
  );
};
