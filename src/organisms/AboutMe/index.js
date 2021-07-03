import React from 'react'
import { useTranslation } from 'react-i18next'
import { HrefButton } from '../../atoms/Button'
import { SectionTitle } from '../../atoms/SectionTitle'
import {
  AboutMeContainer,
  Grid,
  ImgWrap,
  ImgAnimateWrap,
  Img,
  ContentWrapper,
  Name,
  Description
} from './AboutMeElements'
import { aboutMe, item, title } from './animations'

const AboutMeSection = () => {
  const [t] = useTranslation('data')
  var data = t('about', { returnObjects: true })

  return (
    <>
      <SectionTitle variants={title}>
        {data.title}
      </SectionTitle>
      <AboutMeContainer variants={aboutMe}>
        <Grid>
          <ImgWrap>
            <ImgAnimateWrap variants={item}>
              <Img src={data.profilePic} alt={data.profileAlt} />
            </ImgAnimateWrap>
          </ImgWrap>
          <ContentWrapper>
            <Name variants={item}>
              {data.intro} <span>{data.name}</span>
            </Name>
            <Description variants={item}>
              {data.description}
            </Description>
            <HrefButton variants={item} href={data.resume}>
              {data.resumeBtn}
            </HrefButton>
          </ContentWrapper>
        </Grid>
      </AboutMeContainer>
    </>
  )
}

export default AboutMeSection
