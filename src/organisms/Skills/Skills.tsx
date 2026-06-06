import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  SkillsSection,
  SectionInner,
  SkillsGrid,
  CategoryColumn,
  CategoryHeader,
  TagRow,
} from "./styles";

export const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SectionInner>
        <SectionTitle title="Skills" />
        <SkillsGrid>
          {portfolio.skills.map((group) => (
            <CategoryColumn
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CategoryHeader>{group.category}</CategoryHeader>
              <TagRow>
                {group.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </TagRow>
            </CategoryColumn>
          ))}
        </SkillsGrid>
      </SectionInner>
    </SkillsSection>
  );
};
