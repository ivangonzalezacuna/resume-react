import React from 'react'
import {
  AboutContainer, PersonalInfoContainer,
  PersonalInfoGrid, AboutWrap,
  Name, Description, ImgAnimateWrap,
  Img, ImgWrap, WorkContainer, EducationContainer,
  TimelineWrap, Timeline, TimelineItem, ItemTime,
  ItemContent, TimeText, ItemTitle, ItemSubtitle,
  ItemDescription
} from './AboutElements'
import ProfilePic from '../../images/profile/ivan.png'
import PdfResume from '../../images/pdf/resume-en.pdf'
import { HrefButton } from '../../molecules/Button'
import { SectionTitle } from '../../molecules/SectionTitle'

const transition = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0
    },
  },
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

const About = () => {
  return (
    <AboutContainer
      initial="initial"
      animate="animate"
      variants={transition}>
      <SectionTitle variants={title} text={"About Me"} />
      <PersonalInfo />
      <SectionTitle variants={title} text={"Work Experience"} />
      <WorkInfo />
      <SectionTitle variants={title} text={"Education"} />
      <EducationInfo />
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
            <HrefButton
              variants={aboutItem}
              href={PdfResume}
              text={"Download CV"} />
          </AboutWrap>
        </PersonalInfoGrid>
      </PersonalInfoContainer>
    </>
  )
}

const workItems = [
  {
    date: "Feb 2020 - Present",
    place: "University of Vigo",
    role: "Research and Development",
    description: "Some text as a description"
  },
  {
    date: "Jun 2019 - Jul 2019",
    place: "Muutech Monitoring Solutions SL",
    role: "Internship",
    description: "Some text as a description"
  }
]

const educationItems = [
  {
    date: "Aug 2016 - Jul 2020",
    place: "University of Vigo",
    role: "Degree in Telecommunications",
    description: "Some text as a description"
  },
  {
    date: "Aug 2019 - Dec 2019",
    place: "University of Oulu",
    role: "Software Development",
    description: "Some text as a description"
  }
]

const WorkInfo = () => {
  return (
    <WorkContainer variants={about}>
      <TimelineElement items={workItems} />
    </WorkContainer>
  )
}

const EducationInfo = () => {
  return (
    <EducationContainer variants={about}>
      <TimelineElement items={educationItems} />
    </EducationContainer>
  )
}

const TimelineElement = ({ items }) => {
  return (
    <TimelineWrap>
      <Timeline>
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <ItemTime><TimeText variants={aboutItem}>{item.date}</TimeText></ItemTime>
            <ItemContent>
              <ItemTitle variants={aboutItem}>{item.place}</ItemTitle>
              <ItemSubtitle variants={aboutItem}>{item.role}</ItemSubtitle>
              <ItemDescription variants={aboutItem}>{item.description}</ItemDescription>
            </ItemContent>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineWrap>
  )
}

export default About
