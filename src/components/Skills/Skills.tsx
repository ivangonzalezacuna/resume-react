import { m } from "framer-motion";
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
    <section id="skills" className={skillsSection}>
      <div className={sectionInner}>
        <SectionTitle title="Skills" />
        <div className={skillsGrid}>
          {portfolio.skills.map((group) => (
            <m.div
              key={group.category}
              className={categoryColumn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className={categoryHeader}>{group.category}</h3>
              <div className={tagRow}>
                {group.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};
