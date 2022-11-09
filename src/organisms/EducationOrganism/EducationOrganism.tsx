import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { TimelineOrganism } from "../TimelineOrganism";
import { education, title } from "./animations";
import { Container } from "./styles";

export const EducationOrganism = () => {
  const [t] = useTranslation("education");
  const items = t("info", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={education}>
        <TimelineOrganism items={items} />
      </Container>
    </>
  );
};
