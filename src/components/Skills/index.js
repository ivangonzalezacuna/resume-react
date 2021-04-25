import { AnimatePresence } from 'framer-motion'
import React, { useState, useRef } from 'react'
import {
  CloseIcon,
  ModalContainer,
  ModalContentWrap,
  ModalOverlay,
  SectionTitle, SectionTitleWrap,
  SkillBtn, SkillCard, SkillGrid,
  SkillLevelBar, SkillLevelValue,
  SkillLevelWrap, SkillLogo,
  SkillLogoWrap, SkillName,
  SkillsContainer
} from './SkillsElements'

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

const ModalCard = ({ openModal, toggleModal }) => {
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
              Skill Modal (To be done)
            </ModalContentWrap>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  )
}

const Card = ({ card }) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <ModalCard openModal={openModal} toggleModal={toggleModal} />
      <SkillCard variants={card}>
        <SkillLogoWrap variants={cardItem}><SkillLogo src={require('../../images/skills/git.svg').default} /></SkillLogoWrap>
        <SkillName variants={cardItem}>Skill Name</SkillName>
        <SkillLevelWrap variants={skillBar}>
          <SkillLevelBar skill='50%' variants={{
            initial: { width: '0%' },
            animate: { width: '50%', transition: { duration: 1 } }
          }} />
          <SkillLevelValue variants={btnItem}>50%</SkillLevelValue>
        </SkillLevelWrap>
        <SkillBtn variants={btnItem} onClick={toggleModal}>Show more</SkillBtn>
      </SkillCard>
    </>
  )
}

const cardList = [1, 2, 3, 4, 5, 6]

const Skills = ({ fastTransition }) => {
  return (
    <>
      <SkillsContainer
        initial="initial"
        animate="animate"
        variants={content(fastTransition)}>
        <SectionTitleWrap>
          <SectionTitle variants={title}>Skills</SectionTitle>
        </SectionTitleWrap>
        <SkillGrid>
          {cardList.map((value) => (
            <Card key={value} card={card} />
          ))}
        </SkillGrid>
      </SkillsContainer>
    </>
  )
}

export default Skills
