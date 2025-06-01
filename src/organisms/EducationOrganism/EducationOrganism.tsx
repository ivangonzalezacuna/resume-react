import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { education, title } from "./animations";
import {
  Card,
  CardHeader,
  CollegeDuration,
  CollegeLocation,
  CollegeName,
  CollegeWrapper,
  Container,
  DegreeTitle,
  DescriptionContainer,
  DescriptionItem,
  Separator,
  Tech,
  TechContainer,
} from "./styles";

export const EducationOrganism = () => {
  const [t] = useTranslation("education");
  const items = t("info", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={education}>
        {items.map((item, itemKey) => (
          <Card key={itemKey}>
            <CardHeader>
              <CollegeWrapper>
                <CollegeName>{item.college}</CollegeName>
                <CollegeLocation>{item.location}</CollegeLocation>
              </CollegeWrapper>
              <CollegeDuration>{item.duration}</CollegeDuration>
            </CardHeader>
            <Separator width={80} />
            <DegreeTitle>{item.degree}</DegreeTitle>
            <DescriptionContainer>
              {item.description.map((desc, descKey) => (
                <DescriptionItem key={descKey}>{desc}</DescriptionItem>
              ))}
            </DescriptionContainer>
            {item.technologies.length > 0 && (
              <>
                <Separator width={50} />
                <TechContainer>
                  {item.technologies.map((tech, techKey) => {
                    return (
                      <Tech
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        key={techKey}
                      >
                        {tech}
                      </Tech>
                    );
                  })}
                </TechContainer>
              </>
            )}
          </Card>
        ))}
      </Container>
    </>
  );
};
