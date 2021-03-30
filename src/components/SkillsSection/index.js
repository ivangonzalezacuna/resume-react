import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import {
  SkillsWrapper,
  SkillCard,
  TopLine,
  SkillBarWrap,
  SkillBar,
  SkillValue,
  SkillsContainer,
  TopLineWrap,
  FrontImg,
  BackImg,
  SkillH2,
  SkillP,
  ShowBackCard,
  CloseBackCard
} from './SkillsElements'

const Card = ({ info }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection='vertical'
        flipSpeedBackToFront='0.3'
        flipSpeedFrontToBack='0.3'>
        <SkillCard>
          <ShowBackCard onClick={toggleFlip} />
          <FrontImg src={info.icon} />
          <SkillH2>{info.technology}</SkillH2>
          <SkillBarWrap>
            <SkillBar skillValue={info.level}>
              <SkillValue>{info.level}</SkillValue>
            </SkillBar>
          </SkillBarWrap>
        </SkillCard>
        <SkillCard>
          <CloseBackCard onClick={toggleFlip} />
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
          <TopLine>{skills.sectionTitle}</TopLine>
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
