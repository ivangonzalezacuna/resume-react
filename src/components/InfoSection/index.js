import React from 'react'
import { useInView } from 'react-intersection-observer'
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
  Description
} from './InfoElements'

const cardVariants = {
  hidden: { opacity: 0 },
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  fadeOut: {
    opacity: 0,
    transition: { duration: 0.5 },
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  fadeIn: {
    opacity: 1, y: 0,
    transition: { duration: 1 },
  },
  fadeOut: {
    opacity: 0,
    transition: { duration: 1 },
  }
}

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  fadeIn: {
    opacity: 1, x: 0,
    transition: { duration: 0.5 },
  },
  fadeOut: {
    opacity: 0, x: -50,
    transition: { duration: 0.5 },
  }
}

const CardSection = ({ section, icon }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: '0px',
  })

  return (
    <InfoCard ref={ref}
      variants={cardVariants}
      initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}>
      <InfoRow>
        <Column1>
          <TextWrapper>
            <TextRow><Company
              variants={textVariants}
              initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}
            >{section.company}</Company></TextRow>
            <TextRow>
              <TextIcon
                variants={textVariants}
                initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}
              >
                {icon ? <MdWork /> : <FaUserGraduate />}
              </TextIcon>
              <JobTitle
                variants={textVariants}
                initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}
              >{section.jobTitle}</JobTitle>
            </TextRow>
            <TextRow>
              <TextIcon
                variants={textVariants}
                initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}
              ><FaCalendarAlt /></TextIcon>
              <Dates
                variants={textVariants}
                initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}
              >{section.dates}</Dates>
            </TextRow>
          </TextWrapper>
        </Column1>
        <Column2>
          <TextWrapper>
            <Description
              variants={textVariants}
              initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}
            >{section.description}</Description>
          </TextWrapper>
        </Column2>
      </InfoRow>
    </InfoCard>
  )
}

const InfoSection = ({ info }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: '-60px',
    triggerOnce: true,
  })

  return (
    <>
      <InfoContainer id={info.id}>
        <TopLineWrap>
          <TopLine ref={ref}
            variants={titleVariants}
            initial='hidden' animate={inView && 'fadeIn'}
          >{info.sectionTitle}</TopLine>
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
