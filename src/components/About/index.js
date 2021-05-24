import React from 'react'
import { AboutContainer } from './AboutElements'
import SkillsSection from '../../organisms/Skills'
import WorkSection from '../../organisms/Work'
import EducationSection from '../../organisms/Education'
import AboutMeSection from '../../organisms/AboutMe'

const about = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
    },
  },
}

const About = () => {
  return (
    <AboutContainer
      initial="initial"
      animate="animate"
      variants={about}>
      <AboutMeSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
    </AboutContainer>
  )
}

export default About
