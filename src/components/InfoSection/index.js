import React from 'react'
import Fade from 'react-reveal/Fade'
import { FaCalendarAlt, FaUserGraduate } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import {
  InfoContainer,
  InfoWrapper,
  TopLineWrap,
  TopLine,
  InfoCard,
  InfoRow,
  Column1,
  TextWrapper,
  TextRow,
  Company,
  JobTitle,
  Dates,
  TextIcon,
  Column2,
  Description
} from './InfoElements'

const InfoSection = ({ info }) => {

  return (
    <>
      <InfoContainer id={info.id}>
        <TopLineWrap>
          <TopLine>{info.sectionTitle}</TopLine>
        </TopLineWrap>
        <InfoWrapper>
          {info.data.map((section, index) => (
            <Fade key={index} left={section.fadeLeft} right={section.fadeRight}>
              <InfoCard>
                <InfoRow>
                  <Column1>
                    <TextWrapper>
                      <TextRow>
                        <Company>{section.company}</Company>
                      </TextRow>
                      <TextRow>
                        <TextIcon>
                          {info.icon ? <MdWork /> : <FaUserGraduate />}
                        </TextIcon>
                        <JobTitle>{section.jobTitle}</JobTitle>
                      </TextRow>
                      <TextRow>
                        <TextIcon>
                          <FaCalendarAlt />
                        </TextIcon>
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
            </Fade>
          ))}
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
