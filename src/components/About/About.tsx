import { Container } from "./styles";
import { container } from "./animations";
import {
  AboutMeOrganism,
  EducationOrganism,
  SkillsOrganism,
  WorkOrganism,
} from "../../organisms";

export const About = () => {
  return (
    <Container initial="initial" animate="animate" variants={container}>
      <AboutMeOrganism />
      <SkillsOrganism />
      <WorkOrganism />
      <EducationOrganism />
    </Container>
  );
};
