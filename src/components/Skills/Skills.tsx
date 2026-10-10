import { m } from "framer-motion";
import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import { staggerContainer, staggerItem } from "../../styles/motion";
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
        <m.div
          className={skillsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolio.skills.map((group) => (
            <m.div
              key={group.category}
              className={categoryColumn}
              variants={staggerItem}
            >
              <h3 className={categoryHeader}>{group.category}</h3>
              <div className={tagRow}>
                {group.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};
