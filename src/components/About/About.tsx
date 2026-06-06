import { TechTag } from "../../atoms/TechTag";
import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  AboutSection,
  SectionInner,
  BioBlock,
  BioParagraph,
  DossierGrid,
  SubHeading,
  Card,
  CardHeader,
  DegreeName,
  MetaColumn,
  MonoTag,
  DescriptionList,
  DescriptionItem,
  TagRow,
  LanguageList,
  LanguageItem,
  LanguageName,
  ProficiencyTag,
} from "./styles";

export const About = () => {
  return (
    <AboutSection id="about">
      <SectionInner>
        <SectionTitle title="About" />
        <BioBlock>
          <BioParagraph>{portfolio.personal.summary}</BioParagraph>
        </BioBlock>
        <DossierGrid>
          <div>
            <SubHeading>Education</SubHeading>
            {portfolio.education.map((entry) => (
              <Card
                key={entry.college}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CardHeader>
                  <DegreeName>{entry.degree}</DegreeName>
                  <MetaColumn>
                    <MonoTag>{entry.college}</MonoTag>
                    <MonoTag>{entry.location}</MonoTag>
                    <MonoTag>{entry.duration}</MonoTag>
                  </MetaColumn>
                </CardHeader>
                <DescriptionList>
                  {entry.description.map((line) => (
                    <DescriptionItem key={line}>{line}</DescriptionItem>
                  ))}
                </DescriptionList>
                <TagRow>
                  {entry.technologies.map((tech) => (
                    <TechTag key={tech} name={tech} />
                  ))}
                </TagRow>
              </Card>
            ))}
          </div>
          <div>
            <SubHeading>Languages</SubHeading>
            <LanguageList>
              {portfolio.languages.map((entry) => (
                <LanguageItem
                  key={entry.language}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <LanguageName>{entry.language}</LanguageName>
                  <ProficiencyTag>{entry.proficiency}</ProficiencyTag>
                </LanguageItem>
              ))}
            </LanguageList>
          </div>
        </DossierGrid>
      </SectionInner>
    </AboutSection>
  );
};
