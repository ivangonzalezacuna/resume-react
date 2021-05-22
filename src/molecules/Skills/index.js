import React, { useState, useRef } from 'react'
import {
  CloseIcon,
  LevelBar,
  LevelValue,
  LevelWrap,
  Logo,
  LogoWrap,
  ModalContainer,
  ModalContentWrap,
  ModalOverlay,
  Name,
  SectionContainer,
  SectionWrapper,
  Tag
} from './SkillsElements'
import { AnimatePresence } from 'framer-motion'
import { SectionTitle } from '../../atoms/SectionTitle'

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
  {
    name: "Angular",
    level: 41,
    img: require('../../images/skills/angularjs.svg').default,
  },
  {
    name: "Bash",
    level: 66,
    img: require('../../images/skills/bash.svg').default,
  },
  {
    name: "C",
    level: 66,
    img: require('../../images/skills/c-programming.svg').default,
  },
  {
    name: "MongoDB",
    level: 46,
    img: require('../../images/skills/mongodb.svg').default,
  },
  {
    name: "MySQL",
    level: 77,
    img: require('../../images/skills/mysql.svg').default,
  },
  {
    name: "NPM",
    level: 70,
    img: require('../../images/skills/npm.svg').default,
  },
  {
    name: "Typescript",
    level: 35,
    img: require('../../images/skills/typescript.svg').default,
  },
  {
    name: "Visual Studio",
    level: 85,
    img: require('../../images/skills/visual-studio.svg').default,
  },
  {
    name: "Yarn",
    level: 56,
    img: require('../../images/skills/yarn.svg').default,
  },
].sort((a, b) => a.name.localeCompare(b.name))

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

const tagVariant = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0, opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    }
  }
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

const modalItem = {
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

const Skill = ({ item }) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <Modal
        openModal={openModal}
        toggleModal={toggleModal}
        data={item} />
      <Tag
        onClick={toggleModal}
        variants={tagVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
        {item.name}
      </Tag>
    </>
  )
}

const Modal = ({ openModal, toggleModal, data }) => {
  const ref = useRef()
  const closeModal = e => {
    if (ref.current === e.target) {
      toggleModal()
    }
  }

  const skillBar = {
    hidden: { width: '0%' },
    visible: { width: data.level + '%', transition: { duration: 0.5 } },
    exit: { width: '0%', transition: { duration: 0.5 } }
  }

  return (
    <AnimatePresence>
      {openModal && (
        <ModalOverlay ref={ref} onClick={closeModal}>
          <ModalContainer variants={modalVariants}
            initial='hidden' animate='visible' exit="exit">
            <CloseIcon onClick={toggleModal} />
            <ModalContentWrap>
              <Name variants={modalItem}>{data.name}</Name>
              <LogoWrap variants={modalItem}>
                <Logo src={data.img} />
              </LogoWrap>
              <LevelWrap variants={skillBarBox}>
                <LevelBar variants={skillBar} />
                <LevelValue variants={skillValueItem}>{data.level}%</LevelValue>
              </LevelWrap>
            </ModalContentWrap>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  )
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

const SkillsSection = () => {
  return (
    <>
      <SectionTitle variants={title} text={"Skills"} />
      <SectionContainer variants={skillBox}>
        <SectionWrapper>
          {skillItems.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}

export default SkillsSection
