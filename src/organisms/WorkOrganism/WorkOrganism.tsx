import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { TimelineOrganism } from "../TimelineOrganism";
import { title, work } from "./animations";
import { Container } from "./styles";

export const WorkOrganism = () => {
  const [t] = useTranslation("work");
  const items = t("info", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={work}>
        <TimelineOrganism items={items} />
      </Container>
    </>
  );
};
