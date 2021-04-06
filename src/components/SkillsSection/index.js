import React, { useState, useEffect, useRef } from 'react'
import ReactCardFlip from 'react-card-flip'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SkillsWrapper, SkillCard,
  TopLine, SkillBarWrap,
  SkillBar, SkillValue,
  SkillsContainer, TopLineWrap,
  FrontImg, BackImg,
  SkillH2, SkillP,
  ShowBackCard, CloseBackCard
} from './SkillsElements'
gsap.registerPlugin(ScrollTrigger)

const Card = ({ info }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const sectionRef = useRef(null)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "-10% 100%",
          end: "40% 90%",
          scrub: true,
        }
      })
    gsap.fromTo(sectionRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0, y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 10%",
          end: "80% 0%",
          scrub: true,
        }
      })
  }, [])

  return (
    <div ref={sectionRef}>
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
    </div>
  )
}

const Skills = ({ skills }) => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "0% 100%",
          end: "100% 80%",
          scrub: true,
        }
      })
    gsap.fromTo(titleRef.current,
      { opacity: 1, x: 0 },
      {
        opacity: 0, x: 50,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "0% 20%",
          end: "100% 0%",
          scrub: true,
        }
      })
  })

  return (
    <>
      <SkillsContainer id={skills.id}>
        <TopLineWrap>
          <TopLine ref={titleRef}>{skills.sectionTitle}</TopLine>
        </TopLineWrap>
        <SkillsWrapper>
          {skills.data.map((info, index) => (
            <Card key={index} info={info} />
          ))}
        </SkillsWrapper>
      </SkillsContainer>
    </>
  )
}

export default Skills
