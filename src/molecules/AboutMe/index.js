import React from 'react'
import { HrefButton } from '../../atoms/Button'
import { SectionTitle } from '../../atoms/SectionTitle'
import {
  AboutMeContainer,
  Grid,
  ImgWrap,
  ImgAnimateWrap,
  Img,
  ContentWrapper,
  Name,
  Description
} from './AboutMeElements'

const data = {
  title: 'About Me',
  profilePic: require('../../images/profile/ivan.png').default,
  profileAlt: 'Profile Pic',
  intro: "I'm",
  name: 'Ivan Gonzalez',
  description: "Lorem ipsum some text goes here with a nice description about me in a copuple of lines. Let's say from 5 to 6 would be nice, or even less if possible",
  resume: require('../../images/pdf/resume-en.pdf').default,
  resumeBtn: 'Download CV',
}

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

const aboutMe = {
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

const aboutMeItem = {
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

const AboutMeSection = () => {
  return (
    <>
      <SectionTitle variants={title} text={data.title} />
      <AboutMeContainer variants={aboutMe}>
        <Grid>
          <ImgWrap>
            <ImgAnimateWrap variants={aboutMeItem}>
              <Img src={data.profilePic} alt={data.profileAlt} />
            </ImgAnimateWrap>
          </ImgWrap>
          <ContentWrapper>
            <Name variants={aboutMeItem}>
              {data.intro} <span>{data.name}</span>
            </Name>
            <Description variants={aboutMeItem}>
              {data.description}
            </Description>
            <HrefButton
              variants={aboutMeItem}
              href={data.resume}
              text={data.resumeBtn} />
          </ContentWrapper>
        </Grid>
      </AboutMeContainer>
    </>
  )
}

export default AboutMeSection
