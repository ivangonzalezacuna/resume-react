import { m } from "framer-motion";
import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import { staggerContainer, staggerItem } from "../../styles/motion";
import portfolio from "../../content/portfolio";
import {
  aboutSection,
  sectionInner,
  bioBlock,
  bioParagraph,
  dossierGrid,
  subHeading,
  card,
  cardHeader,
  degreeName,
  metaColumn,
  monoTag,
  descriptionList,
  descriptionItem,
  tagRow,
  languageList,
  languageItem,
  languageName,
  proficiencyTag,
} from "./About.css";

export const About = () => {
  return (
    <section
      id="about"
      className={aboutSection}
      aria-labelledby="about-heading"
    >
      <div className={sectionInner}>
        <SectionTitle title="About" id="about-heading" />
        <div className={bioBlock}>
          <p className={bioParagraph}>{portfolio.personal.summary}</p>
        </div>
        <div className={dossierGrid}>
          <div>
            <h3 className={subHeading}>Education</h3>
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {portfolio.education.map((entry) => (
                <m.div
                  key={entry.college}
                  className={card}
                  variants={staggerItem}
                >
                  <div className={cardHeader}>
                    <h4 className={degreeName}>{entry.degree}</h4>
                    <div className={metaColumn}>
                      <span className={monoTag}>{entry.college}</span>
                      <span className={monoTag}>{entry.location}</span>
                      <span className={monoTag}>{entry.duration}</span>
                    </div>
                  </div>
                  <ul className={descriptionList}>
                    {entry.description.map((line) => (
                      <li key={line} className={descriptionItem}>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className={tagRow}>
                    {entry.technologies.map((tech) => (
                      <TechTag key={tech} name={tech} />
                    ))}
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
          <div>
            <h3 className={subHeading}>Languages</h3>
            <m.div
              className={languageList}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {portfolio.languages.map((entry) => (
                <m.div
                  key={entry.language}
                  className={languageItem}
                  variants={staggerItem}
                >
                  <span className={languageName}>{entry.language}</span>
                  <span className={proficiencyTag}>{entry.proficiency}</span>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};
