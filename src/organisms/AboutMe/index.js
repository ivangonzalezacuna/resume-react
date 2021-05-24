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
import { aboutMe, item, title } from './animations'

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

const AboutMeSection = () => {
  return (
    <>
      <SectionTitle variants={title} text={data.title} />
      <AboutMeContainer variants={aboutMe}>
        <Grid>
          <ImgWrap>
            <ImgAnimateWrap variants={item}>
              <Img src={data.profilePic} alt={data.profileAlt} />
            </ImgAnimateWrap>
          </ImgWrap>
          <ContentWrapper>
            <Name variants={item}>
              {data.intro} <span>{data.name}</span>
            </Name>
            <Description variants={item}>
              {data.description}
            </Description>
            <HrefButton
              variants={item}
              href={data.resume}
              text={data.resumeBtn} />
          </ContentWrapper>
        </Grid>
      </AboutMeContainer>
    </>
  )
}

export default AboutMeSection
