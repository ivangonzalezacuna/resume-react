import { m } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  projectsSection,
  sectionInner,
  projectGrid,
  card,
  cardHeader,
  projectTitle,
  projectTitleLink,
  summary,
  highlightList,
  highlightItem,
  tagRow,
} from "./Projects.css";

export const Projects = () => {
  return (
    <section id="projects" className={projectsSection}>
      <div className={sectionInner}>
        <SectionTitle title="Projects" />
        <div className={projectGrid}>
          {portfolio.projects.map((project) => (
            <m.div
              key={project.title}
              className={card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={cardHeader}>
                {project.url ? (
                  <a
                    className={projectTitleLink}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — external link`}
                  >
                    {project.title}
                    <FiExternalLink aria-hidden="true" />
                  </a>
                ) : (
                  <h3 className={projectTitle}>{project.title}</h3>
                )}
              </div>
              <p className={summary}>{project.summary}</p>
              <ul className={highlightList}>
                {project.highlights.map((point) => (
                  <li key={point} className={highlightItem}>
                    {point}
                  </li>
                ))}
              </ul>
              <div className={tagRow}>
                {project.technologies.map((tech) => (
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
