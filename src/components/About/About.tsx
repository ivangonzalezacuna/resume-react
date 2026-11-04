import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
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
            {portfolio.education.map((entry) => (
              <div key={entry.college} className={card}>
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
              </div>
            ))}
          </div>
          <div>
            <h3 className={subHeading}>Languages</h3>
            <div className={languageList}>
              {portfolio.languages.map((entry) => (
                <div key={entry.language} className={languageItem}>
                  <span className={languageName}>{entry.language}</span>
                  <span className={proficiencyTag}>{entry.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
