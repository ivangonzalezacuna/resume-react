import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  skillsSection,
  sectionInner,
  skillsGrid,
  categoryColumn,
  categoryHeader,
  tagRow,
} from "./Skills.css";

export const Skills = () => {
  return (
    <section
      id="skills"
      className={skillsSection}
      aria-labelledby="skills-heading"
    >
      <div className={sectionInner}>
        <SectionTitle title="Skills" id="skills-heading" />
        <div className={skillsGrid}>
          {portfolio.skills.map((group) => (
            <div key={group.category} className={categoryColumn}>
              <h3 className={categoryHeader}>{group.category}</h3>
              <div className={tagRow}>
                {group.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
