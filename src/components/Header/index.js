import React from 'react'
import {
  HeaderContainer, HeaderSection,
  HeaderWrapper, HeaderBackground,
  HeaderContent, HeaderName,
  HeaderDescription, HeaderGoAboutWrap,
  HeaderGoAboutText, HeaderGoAboutIcon,
  HeaderGoAbout, HeaderSocialWrap,
  HeaderContact
} from './HeaderElements'
import HeaderBg from '../../images/background/header.svg'
import { LinkButton } from '../../atoms/Button'
import SocialIcons from '../../molecules/SocialIcons'

const content = (isFirstMount, fastTransition) => ({
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: isFirstMount ? 2 : fastTransition ? 0 : 0.5,
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

const icons = {
  initial: { opacity: 0 },
  animate: { opacity: 1, },
}

const goAbout = (isFirstMount, fastTransition) => ({
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: isFirstMount ? 2.3 : fastTransition ? 0.3 : 0.8,
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
              <HeaderContact>
                <LinkButton
                  variants={title}
                  to='/contact'
                  onClick={() => updateFastTransition(true)}
                  text='Contact Me' />
                <HeaderSocialWrap>
                  <SocialIcons row header variants={icons} />
                </HeaderSocialWrap>
              </HeaderContact>
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
        </HeaderWrapper>
      </HeaderSection>
    </>
  )
}

export default Header