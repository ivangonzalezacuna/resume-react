import React, { useEffect, useRef } from 'react'
import { FaCalendarAlt, FaUserGraduate } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  InfoContainer, InfoWrapper,
  TopLineWrap, TopLine,
  InfoCard, InfoRow,
  Column1, TextWrapper,
  TextRow, Company,
  JobTitle, Dates,
  TextIcon, Column2,
  Description
} from './InfoElements'
gsap.registerPlugin(ScrollTrigger)

const CardSection = ({ section, icon }) => {
  const sectionRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "0% 100%",
          end: "40% 90%",
          scrub: true,
        }
      })
    gsap.fromTo(sectionRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 10%",
          end: "80% 0%",
          scrub: true,
        }
      })
  }, [])

  return (
    <InfoCard ref={sectionRef}>
      <InfoRow>
        <Column1>
          <TextWrapper>
            <TextRow><Company>{section.company}</Company></TextRow>
            <TextRow>
              <TextIcon>
                {icon ? <MdWork /> : <FaUserGraduate />}
              </TextIcon>
              <JobTitle>{section.jobTitle}</JobTitle>
            </TextRow>
            <TextRow>
              <TextIcon><FaCalendarAlt /></TextIcon>
              <Dates>{section.dates}</Dates>
            </TextRow>
          </TextWrapper>
        </Column1>
        <Column2>
          <TextWrapper>
            <Description>{section.description}</Description>
          </TextWrapper>
        </Column2>
      </InfoRow>
    </InfoCard>
  )
}

const InfoSection = ({ info }) => {
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
      <InfoContainer id={info.id}>
        <TopLineWrap>
          <TopLine ref={titleRef}>{info.sectionTitle}</TopLine>
        </TopLineWrap>
        <InfoWrapper>
          {info.data.map((section, index) => (
            <CardSection key={index} section={section} icon={info.icon} />
          ))}
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
