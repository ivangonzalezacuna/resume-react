import { m } from "framer-motion";
import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import { staggerContainer, staggerItem } from "../../styles/motion";
import portfolio from "../../content/portfolio";
import {
  experienceSection,
  sectionInner,
  card,
  cardHeader,
  companyName,
  metaRow,
  monoTag,
  roleDivider,
  roleBlock,
  roleHeader,
  roleTitle,
  roleDuration,
  descriptionList,
  descriptionItem,
  tagRow,
} from "./Experience.css";

export const Experience = () => {
  return (
    <section
      id="experience"
      className={experienceSection}
      aria-labelledby="experience-heading"
    >
      <m.div
        className={sectionInner}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle title="Experience" id="experience-heading" />
        {portfolio.experience.map((entry) => (
          <m.div key={entry.company} className={card} variants={staggerItem}>
            <div className={cardHeader}>
              <h3 className={companyName}>{entry.company}</h3>
              <div className={metaRow}>
                <span className={monoTag}>{entry.location}</span>
                <span className={monoTag}>{entry.duration}</span>
              </div>
            </div>
            {entry.roles.map((role, i) => (
              <div key={role.title} className={roleBlock}>
                {i > 0 && <hr className={roleDivider} />}
                <div className={roleHeader}>
                  <span className={roleTitle}>{role.title}</span>
                  <span className={roleDuration}>{role.duration}</span>
                </div>
                <ul className={descriptionList}>
                  {role.description.map((line) => (
                    <li key={line} className={descriptionItem}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={tagRow}>
              {entry.technologies.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </m.div>
        ))}
      </m.div>
    </section>
  );
};
