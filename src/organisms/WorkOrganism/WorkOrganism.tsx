import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { ListItemAboutOrganism } from "../ListItemAboutOrganism";
import { title, work } from "./animations";
import { Container } from "./styles";

export const WorkOrganism = () => {
  const [t] = useTranslation("work");
  const items = t("info", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={work}>
        <ListItemAboutOrganism items={items} type="work" />
      </Container>
    </>
  );
};
