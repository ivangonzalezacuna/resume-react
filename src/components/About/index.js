import React, { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  AboutContainer, PersonalInfoContainer,
  PersonalInfoGrid, AboutWrap,
  Name, Description, ImgAnimateWrap,
  Img, ImgWrap, SectionContainer,
  TimelineWrap, Timeline, TimelineItem, ItemTime,
  ItemContent, TimeText, ItemTitle, ItemSubtitle,
  ItemDescription, SkillWrapper, SkillTag,
  SkillModalOverlay, SkillModalContainer,
  SkillCloseIcon, SkillModalContentWrap,
  SkillLogoWrap, SkillLogo, SkillName,
  SkillLevelWrap, SkillLevelBar, SkillLevelValue, SkillTagWrap
} from './AboutElements'
import ProfilePic from '../../images/profile/ivan.png'
import PdfResume from '../../images/pdf/resume-en.pdf'
import { HrefButton } from '../../molecules/Button'
import { SectionTitle } from '../../molecules/SectionTitle'

const transition = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
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

const skillBox = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  }
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

const skillTagVariant = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0, opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    }
  }
}

const About = () => {
  return (
    <AboutContainer
      initial="initial"
      animate="animate"
      variants={transition}>
      <SectionTitle variants={title} text={"About Me"} />
      <PersonalInfo />
      <SectionTitle variants={title} text={"Skills"} />
      <SkillsInfo />
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

const skillItems = [
  {
    name: "React",
    level: 35,
    img: require('../../images/skills/react.svg').default,
  },
  {
    name: "Golang",
    level: 43,
    img: require('../../images/skills/golang.svg').default,
  },
  {
    name: "Javascript",
    level: 79,
    img: require('../../images/skills/javascript.svg').default,
  },
  {
    name: "Linux",
    level: 54,
    img: require('../../images/skills/linux.svg').default,
  },
  {
    name: "Python",
    level: 75,
    img: require('../../images/skills/python.svg').default,
  },
  {
    name: "Git",
    level: 55,
    img: require('../../images/skills/git.svg').default,
  },
  {
    name: "Java",
    level: 55,
    img: require('../../images/skills/java.svg').default,
  },
  {
    name: "Android",
    level: 55,
    img: require('../../images/skills/android.svg').default,
  },
  {
    name: "PostgreSQL",
    level: 55,
    img: require('../../images/skills/postgresql.svg').default,
  },
  {
    name: "NodeJS",
    level: 48,
    img: require('../../images/skills/nodejs.svg').default,
  },
  {
    name: "Docker",
    level: 33,
    img: require('../../images/skills/docker.svg').default,
  },
  {
    name: "CSS",
    level: 77,
    img: require('../../images/skills/css3.svg').default,
  },
  {
    name: "HTML",
    level: 66,
    img: require('../../images/skills/html5.svg').default,
  },
  {
    name: "Swift",
    level: 34,
    img: require('../../images/skills/swift.svg').default,
  },
  {
    name: "Windows",
    level: 66,
    img: require('../../images/skills/windows.svg').default,
  },
].sort((a, b) => a.name.localeCompare(b.name))

const SkillsInfo = () => {
  return (
    <SectionContainer variants={skillBox}>
      <SkillWrapper>
        {skillItems.map((item, index) => (
          <SkillElement key={index} item={item} />
        ))}
      </SkillWrapper>
    </SectionContainer>
  )
}

const SkillElement = ({ item }) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <SkillModal openModal={openModal} toggleModal={toggleModal} data={item} />
      <SkillTagWrap >
        <SkillTag onClick={toggleModal} variants={skillTagVariant} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {item.name}
        </SkillTag>
      </SkillTagWrap>

    </>
  )
}

const modalVariants = {
  hidden: { opacity: 0, transform: 'translateY(-100%)' },
  visible: {
    opacity: 1, transform: 'translateY(0%)',
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0, transform: 'translateY(-100%)',
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  }
}

const cardItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7
    },
  },
}

const skillBarBox = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.99],
      delayChildren: 0.3,
      staggerChildren: 0.05,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.3,
    },
  },
}

const skillValueItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const SkillModal = ({ openModal, toggleModal, data }) => {
  const ref = useRef()
  const closeModal = e => {
    if (ref.current === e.target) {
      toggleModal()
    }
  }

  const skillBarValue = {
    hidden: { width: '0%' },
    visible: { width: data.level + '%', transition: { duration: 0.5 } },
    exit: { width: '0%', transition: { duration: 0.5 } }
  }

  return (
    <AnimatePresence>
      {openModal && (
        <SkillModalOverlay ref={ref} onClick={closeModal}>
          <SkillModalContainer variants={modalVariants}
            initial='hidden' animate='visible' exit="exit">
            <SkillCloseIcon onClick={toggleModal} />
            <SkillModalContentWrap>
              <SkillLogoWrap variants={cardItem}>
                <SkillLogo src={data.img} />
              </SkillLogoWrap>
              <SkillName variants={cardItem}>{data.name}</SkillName>
              <SkillLevelWrap variants={skillBarBox}>
                <SkillLevelBar variants={skillBarValue} />
                <SkillLevelValue variants={skillValueItem}>{data.level}%</SkillLevelValue>
              </SkillLevelWrap>
            </SkillModalContentWrap>
          </SkillModalContainer>
        </SkillModalOverlay>
      )}
    </AnimatePresence>
  )
}

const WorkInfo = () => {
  return (
    <SectionContainer variants={about}>
      <TimelineElement items={workItems} />
    </SectionContainer>
  )
}

const EducationInfo = () => {
  return (
    <SectionContainer variants={about}>
      <TimelineElement items={educationItems} />
    </SectionContainer>
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
