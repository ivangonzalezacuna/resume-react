import { useTranslation } from "react-i18next";
import { SectionTitle, TechTag } from "../../atoms";
import { title, work } from "./animations";
import {
  Card,
  CardHeader,
  CompanyDuration,
  CompanyLocation,
  CompanyName,
  CompanyWrapper,
  Container,
  RoleCard,
  RoleDescriptionContainer,
  RoleDescriptionItem,
  RoleDuration,
  RoleHeader,
  RoleTitle,
  Separator,
  TechContainer,
} from "./styles";

export const WorkOrganism = () => {
  const [t] = useTranslation("work");
  const items = t("info", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={work}>
        {items.map((item) => (
          <Card key={item.company}>
            <CardHeader>
              <CompanyWrapper>
                <CompanyName>{item.company}</CompanyName>
                <CompanyLocation>{item.location}</CompanyLocation>
              </CompanyWrapper>
              <CompanyDuration>{item.duration}</CompanyDuration>
            </CardHeader>
            {item.roles.map((role) => (
              <RoleCard key={role.title}>
                <Separator width={80} />
                <RoleHeader>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleDuration>{role.duration}</RoleDuration>
                </RoleHeader>
                <RoleDescriptionContainer>
                  {role.description.map((desc) => (
                    <RoleDescriptionItem key={desc}>{desc}</RoleDescriptionItem>
                  ))}
                </RoleDescriptionContainer>
              </RoleCard>
            ))}
            {item.technologies.length > 0 && (
              <>
                <Separator width={50} />
                <TechContainer>
                  {item.technologies.map((tech) => (
                    <TechTag key={tech} name={tech} />
                  ))}
                </TechContainer>
              </>
            )}
          </Card>
        ))}
      </Container>
    </>
  );
};
