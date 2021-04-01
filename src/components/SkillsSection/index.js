import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from 'framer-motion'
import {
  SkillsWrapper, SkillCard,
  TopLine, SkillBarWrap,
  SkillBar, SkillValue,
  SkillsContainer, TopLineWrap,
  FrontImg, BackImg,
  SkillH2, SkillP,
  ShowBackCard, CloseBackCard
} from './SkillsElements'

function FadeInTitle({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const topLineVariants = {
    visible: { opacity: 1, transform: 'translateX(0vw)' },
    hidden: { opacity: 0, transform: 'translateX(-10vw)' }
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.8 }}
      variants={topLineVariants}
    >
      {children}
    </motion.div>
  )
}

const Card = ({ info }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection='vertical'>
        <SkillCard>
          <ShowBackCard onClick={toggleFlip} invisible={isFlipped ? 'true' : 'false'} />
          <FrontImg src={info.icon} />
          <SkillH2>{info.technology}</SkillH2>
          <SkillBarWrap>
            <SkillBar skillValue={info.level}>
              <SkillValue>{info.level}</SkillValue>
            </SkillBar>
          </SkillBarWrap>
        </SkillCard>
        <SkillCard>
          <CloseBackCard onClick={toggleFlip} invisible={isFlipped ? 'false' : 'true'} />
          <BackImg src={info.icon} />
          <SkillP>{info.description}</SkillP>
        </SkillCard>
      </ReactCardFlip>
    </>
  )
}

const Skills = ({ skills }) => {
  return (
    <>
      <SkillsContainer id={skills.id}>
        <TopLineWrap>
          <FadeInTitle>
            <TopLine>{skills.sectionTitle}</TopLine>
          </FadeInTitle>
        </TopLineWrap>
        <SkillsWrapper>
          {skills.data.map((info, index) => (
            <Card info={info} key={index} />
          ))}
        </SkillsWrapper>
      </SkillsContainer>
    </>
  )
}

export default Skills
