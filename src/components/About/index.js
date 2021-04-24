import React from 'react'
import {
  AboutContainer, TitleWrap,
  Title, PersonalInfoContainer,
  PersonalInfoGrid, AboutWrap,
  Name, Description, ImgAnimateWrap,
  Img, ImgWrap, BtnWrap, Btn
} from './AboutElements'
import ProfilePic from '../../images/profile/ivan.png'

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

const about = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
}

const aboutItem = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
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
      <PersonalInfo />
      <TitleWrap>
        <Title variants={title}>Work Experience</Title>
      </TitleWrap>
      <TitleWrap>
        <Title variants={title}>Education</Title>
      </TitleWrap>
    </AboutContainer>
  )
}

const PersonalInfo = () => {
  return (
    <>
      <PersonalInfoContainer variants={about}>
        <PersonalInfoGrid>
          <ImgWrap>
            <ImgAnimateWrap variants={aboutItem}>
              <Img src={ProfilePic} alt='Profile Pic' />
            </ImgAnimateWrap>
          </ImgWrap>
          <AboutWrap>
            <Name variants={aboutItem}>I'm Ivan Gonzalez</Name>
            <Description variants={aboutItem}>Lorem ipsum some text goes here with a nice description about me in a copuple of lines. Let's say from 5 to 6 would be nice, or even less if possible</Description>
            <BtnWrap variants={aboutItem}>
              <Btn>Download CV</Btn>
            </BtnWrap>
          </AboutWrap>
        </PersonalInfoGrid>
      </PersonalInfoContainer>
    </>
  )
}

export default About
