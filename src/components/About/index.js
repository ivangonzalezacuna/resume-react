import React from "react";
import { AboutContainer } from "./AboutElements";
import SkillsSection from "../../organisms/Skills";
import WorkSection from "../../organisms/Work";
import EducationSection from "../../organisms/Education";
import AboutMeSection from "../../organisms/AboutMe";
import { container } from "./animations";

const About = () => {
  return (
    <AboutContainer initial="initial" animate="animate" variants={container}>
      <AboutMeSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
    </AboutContainer>
  );
};

export default About;
