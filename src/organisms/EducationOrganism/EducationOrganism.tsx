import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { ListItemAboutOrganism } from "../ListItemAboutOrganism";
import { education, title } from "./animations";
import { Container } from "./styles";

export const EducationOrganism = () => {
  const [t] = useTranslation("education");
  const items = t("info", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={education}>
        <ListItemAboutOrganism items={items} type="study" />
      </Container>
    </>
  );
};
