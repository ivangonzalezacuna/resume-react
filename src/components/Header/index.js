import React from 'react'
import {
  HeaderContainer, HeaderSection,
  HeaderWrapper, HeaderBackground,
  HeaderContent, HeaderName,
  HeaderDescription, HeaderGoAboutWrap,
  HeaderGoAboutText, HeaderGoAboutIcon,
  HeaderGoAbout, HeaderSocialWrap,
  SocialIcon
} from './HeaderElements'
import HeaderBg from '../../images/background/header.svg'
import {
  FaFacebookF, FaGithub, FaInstagram,
  FaLinkedinIn, FaSkype
} from 'react-icons/fa'
import { LinkButton } from '../../molecules/Button'

const content = (isFirstMount, fastTransition) => ({
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: isFirstMount ? 2.5 : fastTransition ? 0 : 0.5
    },
  },
})

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const goAbout = (isFirstMount, fastTransition) => ({
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: isFirstMount ? 2.8 : fastTransition ? 0.3 : 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    y: -10,
    transition: {
      repeat: 3,
      repeatType: "reverse",
      duration: 0.25,
    }
  }
})

const Header = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  return (
    <>
      <HeaderSection>
        <HeaderWrapper>
          <HeaderContainer
            initial="initial"
            animate="animate"
            variants={content(isFirstMount, fastTransition)}>
            <HeaderBackground src={HeaderBg} alt='header' />
            <HeaderContent>
              <HeaderName variants={title}>
                Ivan Gonzalez
              </HeaderName>
              <HeaderDescription variants={title}>
                I'm a software Developer
              </HeaderDescription>
              <LinkButton
                variants={title}
                to='/contact'
                onClick={() => updateFastTransition(true)}
                text='Contact Me' />
            </HeaderContent>
          </HeaderContainer>
          <HeaderGoAboutWrap to="/about" onClick={() => updateFastTransition(true)}>
            <HeaderGoAbout
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={goAbout(isFirstMount, fastTransition)}>
              <HeaderGoAboutText>
                About Me
            </HeaderGoAboutText>
              <HeaderGoAboutIcon />
            </HeaderGoAbout>
          </HeaderGoAboutWrap>
          <HeaderSocialWrap>
            <SocialIcon href={"http://www.google.es"} target="_blank"><FaFacebookF /></SocialIcon>
            <SocialIcon href={"http://www.google.es"} target="_blank"><FaGithub /></SocialIcon>
            <SocialIcon href={"http://www.google.es"} target="_blank"><FaInstagram /></SocialIcon>
            <SocialIcon href={"http://www.google.es"} target="_blank"><FaLinkedinIn /></SocialIcon>
            <SocialIcon href={"http://www.google.es"} target="_blank"><FaSkype /></SocialIcon>
          </HeaderSocialWrap>
        </HeaderWrapper>
      </HeaderSection>
    </>
  )
}

export default Header