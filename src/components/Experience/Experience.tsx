import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  ExperienceSection,
  SectionInner,
  Card,
  CardHeader,
  CompanyName,
  MetaRow,
  MonoTag,
  RoleDivider,
  RoleBlock,
  RoleHeader,
  RoleTitle,
  RoleDuration,
  DescriptionList,
  DescriptionItem,
  TagRow,
} from "./styles";

export const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <SectionInner>
        <SectionTitle title="Experience" />
        {portfolio.experience.map((entry) => (
          <Card
            key={entry.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CardHeader>
              <CompanyName>{entry.company}</CompanyName>
              <MetaRow>
                <MonoTag>{entry.location}</MonoTag>
                <MonoTag>{entry.duration}</MonoTag>
              </MetaRow>
            </CardHeader>
            {entry.roles.map((role, i) => (
              <RoleBlock key={role.title}>
                {i > 0 && <RoleDivider />}
                <RoleHeader>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleDuration>{role.duration}</RoleDuration>
                </RoleHeader>
                <DescriptionList>
                  {role.description.map((line) => (
                    <DescriptionItem key={line}>{line}</DescriptionItem>
                  ))}
                </DescriptionList>
              </RoleBlock>
            ))}
            <TagRow>
              {entry.technologies.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </TagRow>
          </Card>
        ))}
      </SectionInner>
    </ExperienceSection>
  );
};
