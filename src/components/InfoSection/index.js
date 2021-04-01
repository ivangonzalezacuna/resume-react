import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from 'framer-motion'
import { FaCalendarAlt, FaUserGraduate } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import {
  InfoContainer, InfoWrapper,
  TopLineWrap, TopLine,
  InfoCard, InfoRow,
  Column1, TextWrapper,
  TextRow, Company,
  JobTitle, Dates,
  TextIcon, Column2,
  Description,
} from './InfoElements'

function FadeInWhenVisible({ children, index }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const cardVariants = {
    visible: { opacity: 1, transform: 'translateX(0%)' },
    hidden: {
      opacity: 0,
      transform: (index % 2) ? 'translateX(100%)' : 'translateX(-100%)'
    }
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.8 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  )
}

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

const CardSection = ({ section, icon }) => {
  return (
    <InfoCard>
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
  return (
    <>
      <InfoContainer id={info.id}>
        <TopLineWrap>
          <FadeInTitle>
            <TopLine>{info.sectionTitle}</TopLine>
          </FadeInTitle>
        </TopLineWrap>
        <InfoWrapper>
          {info.data.map((section, index) => (
            <FadeInWhenVisible key={index} index={index}>
              <CardSection section={section} icon={info.icon} />
            </FadeInWhenVisible>
          ))}
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
