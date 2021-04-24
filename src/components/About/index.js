import React from 'react'
import { AboutContainer, TitleWrap, Title } from './AboutElements'

const content = (fastTransition) => ({
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: fastTransition ? 0 : 1 },
  },
})

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}


const About = ({ fastTransition }) => {
  return (
    <AboutContainer
      initial="initial"
      animate="animate"
      variants={content(fastTransition)}>
      <TitleWrap>
        <Title variants={title}>About Me</Title>
      </TitleWrap>
      <TitleWrap>
        <Title variants={title}>Work Experience</Title>
      </TitleWrap>
      <TitleWrap>
        <Title variants={title}>Education</Title>
      </TitleWrap>
    </AboutContainer>
  )
}

export default About
