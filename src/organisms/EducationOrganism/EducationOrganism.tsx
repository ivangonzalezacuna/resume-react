import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { ExperienceTranslationInfo } from "../../i18n/types";
import { TimelineOrganism } from "../TimelineOrganism";
import { education, title } from "./animations";
import { Container } from "./styles";

export const EducationOrganism = () => {
  const [t] = useTranslation("education");
  const items = t<string, ExperienceTranslationInfo[]>("info", {
    returnObjects: true,
  });

  return (
    <>
      <SectionTitle variants={title}>{t("sectionTitle")}</SectionTitle>
      <Container variants={education}>
        <TimelineOrganism items={items} />
      </Container>
    </>
  );
};
