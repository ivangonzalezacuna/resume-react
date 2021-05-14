import { AnimatePresence } from 'framer-motion'
import React, { useState, useRef } from 'react'
import { CustomButton } from '../../molecules/Button'
import { SectionTitle } from '../../molecules/SectionTitle'
import {
  CloseIcon,
  ModalContainer,
  ModalContentWrap,
  ModalDescription,
  ModalOverlay,
  ModalTitle,
  SkillCard, SkillGrid,
  SkillLevelBar, SkillLevelValue,
  SkillLevelWrap, SkillLogo,
  SkillLogoWrap, SkillName,
  SkillsContainer
} from './SkillsElements'

const content = (fastTransition) => ({
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: fastTransition ? 0 : 0.3
    },
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

const card = {
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

const cardItem = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const skillBar = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.99],
      delayChildren: 0.5,
    },
  },
}

const btnItem = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const ModalCard = ({ openModal, toggleModal, data }) => {
  const ref = useRef()
  const modalVariants = {
    hidden: { opacity: 0, transform: 'translateY(-100%)' },
    visible: {
      opacity: 1, transform: 'translateY(0%)',
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0, transform: 'translateY(-100%)',
      transition: { duration: 0.4 },
    }
  }

  const closeModal = e => {
    if (ref.current === e.target) {
      toggleModal()
    }
  }

  return (
    <AnimatePresence>
      {openModal && (
        <ModalOverlay ref={ref} onClick={closeModal}>
          <ModalContainer variants={modalVariants}
            initial='hidden' animate='visible' exit="exit">
            <CloseIcon onClick={toggleModal} />
            <ModalContentWrap>
              <ModalTitle>{data.name}</ModalTitle>
              <ModalDescription>Skill with level of {data.level}% (To be done) But now you can see some text on the modal, isn't it?</ModalDescription>
            </ModalContentWrap>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  )
}

const Card = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const skillBarValue = {
    initial: { width: '0%' },
    animate: { width: data.level + '%', transition: { duration: 1 } }
  }

  return (
    <>
      <ModalCard openModal={openModal} toggleModal={toggleModal} data={data} />
      <SkillCard variants={card}>
        <SkillLogoWrap variants={cardItem}>
          <SkillLogo src={require('../../images/skills/git.svg').default} />
        </SkillLogoWrap>
        <SkillName variants={cardItem}>{data.name}</SkillName>
        <SkillLevelWrap variants={skillBar}>
          <SkillLevelBar skill='50%' variants={skillBarValue} />
          <SkillLevelValue variants={btnItem}>{data.level}%</SkillLevelValue>
        </SkillLevelWrap>
        <CustomButton
          variants={btnItem}
          onClick={toggleModal}
          text={"Show more"}
          small dark />
      </SkillCard>
    </>
  )
}

const cardList = [
  {
    name: "Skill Name 1",
    level: 35,
  },
  {
    name: "Skill Name 2",
    level: 43,
  },
  {
    name: "Skill Name 3",
    level: 79,
  },
  {
    name: "Skill Name 4",
    level: 54,
  },
  {
    name: "Skill Name 5",
    level: 75,
  },
  {
    name: "Skill Name 6",
    level: 55,
  },
]

const Skills = ({ fastTransition }) => {
  return (
    <>
      <SkillsContainer
        initial="initial"
        animate="animate"
        variants={content(fastTransition)}>
        <SectionTitle variants={title} text={"Skills"} />
        <SkillGrid>
          {cardList.map((skill, index) => (
            <Card key={index} data={skill} />
          ))}
        </SkillGrid>
      </SkillsContainer>
    </>
  )
}

export default Skills
