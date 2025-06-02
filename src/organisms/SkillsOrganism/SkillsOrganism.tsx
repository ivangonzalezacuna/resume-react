import { useTranslation } from "react-i18next";
import { SectionTitle, TechBox } from "../../atoms";
import { container, title } from "./animations";
import {
  Container,
  Technologies,
  TechnologySection,
  TechnologyTitle,
} from "./styles";

export const SkillsOrganism = () => {
  const [t] = useTranslation("skills");
  const sections = t("sections", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={container}>
        {sections.map((section) => (
          <TechnologySection key={section.name}>
            <TechnologyTitle>{section.name}</TechnologyTitle>
            <Technologies>
              {section.technologies.map((tech) => (
                <TechBox key={tech} name={tech} />
              ))}
            </Technologies>
          </TechnologySection>
        ))}
      </Container>
    </>
  );
};
