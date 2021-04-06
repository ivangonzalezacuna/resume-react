import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeaderBg from '../../images/headers/header1.svg'
import { Button } from '../ButtonElement'
import {
  HeaderSection,
  HeaderWrapper,
  HeaderContent,
  HeaderImage,
  HeaderContainer,
  HeaderName,
  HeaderDescription,
  HeaderBtnWrap
} from './HeaderElements'
gsap.registerPlugin(ScrollTrigger)

const nameVariants = {
  hidden: { opacity: 0, transform: 'translateX(100%)' },
  visible: {
    opacity: 1, transform: 'translateX(0%)',
    transition: { delay: 1, duration: 1 },
  }
}

const descVariants = {
  hidden: { opacity: 0, transform: 'translateX(-100%)' },
  visible: {
    opacity: 1, transform: 'translateX(0%)',
    transition: { delay: 1, duration: 1.2 },
  }
}

const btnVariants = {
  hidden: { opacity: 0, transform: 'translateY(80px)' },
  visible: {
    opacity: 1, transform: 'translateY(0px)',
    transition: { delay: 1.2, duration: 1.5 },
  }
}

const HeaderNameDiv = ({ text }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      immediateRender: false,
      overwrite: 'auto',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top top+=60px',
        end: 'bottom top+=40px',
        scrub: true,
      }
    })
  })
  return (
    <HeaderName ref={headerRef}
      variants={nameVariants}
      initial='hidden' animate='visible'>{text}</HeaderName>
  )
}

const HeaderDescDiv = ({ text }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      immediateRender: false,
      overwrite: 'auto',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top top+=60px',
        end: 'bottom top+=40px',
        scrub: true,
      }
    })
  })
  return (
    <HeaderDescription ref={headerRef}
      variants={descVariants}
      initial='hidden' animate='visible'>{text}</HeaderDescription>
  )
}

const HeaderButtonDiv = ({ text, openModal }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.to(headerRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 1,
        immediateRender: false,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top-=80px top+=60px',
          end: 'bottom-=80px top+=60px',
          invalidateOnRefresh: true,
          scrub: true,
        }
      })
  })
  return (
    <HeaderBtnWrap
      variants={btnVariants}
      initial='hidden' animate='visible'>
      <Button ref={headerRef} onClick={openModal}>
        {text}
      </Button>
    </HeaderBtnWrap>
  )
}

const Header = ({ openModal, header }) => {
  return (
    <HeaderSection>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderImage src={HeaderBg} alt='header' />
          <HeaderContent>
            <HeaderNameDiv text={header.name} />
            <HeaderDescDiv text={header.description} />
            <HeaderButtonDiv text={header.contactButton} openModal={openModal} />
          </HeaderContent>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderSection>
  )
}

export default Header
