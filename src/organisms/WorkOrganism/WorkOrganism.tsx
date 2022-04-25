import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { ExperienceTranslationInfo } from "../../i18n/types";
import { TimelineOrganism } from "../TimelineOrganism";
import { title, work } from "./animations";
import { Container } from "./styles";

export const WorkOrganism = () => {
  const [t] = useTranslation("work");
  const items = t<string, ExperienceTranslationInfo[]>("info", {
    returnObjects: true,
  });

  return (
    <>
      <SectionTitle variants={title}>{t("sectionTitle")}</SectionTitle>
      <Container variants={work}>
        <TimelineOrganism items={items} />
      </Container>
    </>
  );
};
