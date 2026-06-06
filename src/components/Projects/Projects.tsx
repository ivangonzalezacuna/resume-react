import { FiExternalLink } from "react-icons/fi";
import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  ProjectsSection,
  SectionInner,
  ProjectGrid,
  Card,
  CardHeader,
  ProjectTitle,
  ProjectTitleLink,
  Summary,
  HighlightList,
  HighlightItem,
  TagRow,
} from "./styles";

export const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionInner>
        <SectionTitle title="Projects" />
        <ProjectGrid>
          {portfolio.projects.map((project) => (
            <Card
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CardHeader>
                {project.url ? (
                  <ProjectTitleLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — external link`}
                  >
                    {project.title}
                    <FiExternalLink aria-hidden="true" />
                  </ProjectTitleLink>
                ) : (
                  <ProjectTitle>{project.title}</ProjectTitle>
                )}
              </CardHeader>
              <Summary>{project.summary}</Summary>
              <HighlightList>
                {project.highlights.map((point) => (
                  <HighlightItem key={point}>{point}</HighlightItem>
                ))}
              </HighlightList>
              <TagRow>
                {project.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </TagRow>
            </Card>
          ))}
        </ProjectGrid>
      </SectionInner>
    </ProjectsSection>
  );
};
