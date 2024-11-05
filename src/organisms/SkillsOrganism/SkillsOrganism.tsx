import { useTranslation } from "react-i18next";
import { Chip, SectionTitle } from "../../atoms";
import { title, container, tag } from "./animations";
import { Container } from "./styles";

export const SkillsOrganism = () => {
  const [t] = useTranslation("skills");
  const skills = t("info", { returnObjects: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={container}>
        {skills.map((skill, key) => (
          <Chip key={key} title={skill.name} animation={tag} />
        ))}
      </Container>
    </>
  );
};
