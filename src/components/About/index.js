import React from 'react'
import { AboutContainer } from './AboutElements'
import SkillsSection from '../../molecules/Skills'
import WorkSection from '../../molecules/Work'
import EducationSection from '../../molecules/Education'
import AboutMeSection from '../../molecules/AboutMe'

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
