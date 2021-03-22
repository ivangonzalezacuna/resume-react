import React from 'react'
import {
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  TopLine,
  ServiceBar,
  SkillBar,
  SkillValue,
  SkillsContainer,
  TopLineWrap
} from './SkillsElements'

const Skills = ({ skills }) => {

  return (
    <>
      <SkillsContainer id={skills.id}>
        <TopLineWrap>
          <TopLine>{skills.sectionTitle}</TopLine>
        </TopLineWrap>
        <ServicesWrapper>
          {skills.data.map((info, index) => (
            <ServicesCard key={index}>
              <ServicesIcon src={info.icon} />
              <ServicesH2>{info.technology}</ServicesH2>
              <ServiceBar>
                <SkillBar skillValue={info.level}>
                  <SkillValue> {info.level}</SkillValue>
                </SkillBar>
              </ServiceBar>
            </ServicesCard>
          ))}
        </ServicesWrapper>
      </SkillsContainer>
    </>
  )
}

export default Skills
