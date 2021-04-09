import React from 'react'
import { useInView } from 'react-intersection-observer'
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


const nameVariants = {
  hidden: { opacity: 0, transform: 'translate(100%, 0%)' },
  fadeIn: {
    opacity: 1, transform: 'translate(0%, 0%)',
    transition: { duration: 1 },
  },
  fadeOut: {
    opacity: 0, transform: 'translate(0%, -20%)',
    transition: { duration: 0.5 },
  }
}

const descVariants = {
  hidden: { opacity: 0, transform: 'translate(-100%, 0%)' },
  fadeIn: {
    opacity: 1, transform: 'translate(0%, 0%)',
    transition: { duration: 1.2 },
  },
  fadeOut: {
    opacity: 0, transform: 'translate(0%, -20%)',
    transition: { duration: 0.5 },
  }
}

const btnVariants = {
  hidden: { opacity: 0, transform: 'translate(0%, 150px)' },
  fadeIn: {
    opacity: 1, transform: 'translate(0%, 0%)',
    transition: { duration: 1.5 },
  },
  fadeOut: {
    opacity: 0, transform: 'translate(0%, -20%)',
    transition: { duration: 0.5 },
  }
}

const HeaderNameDiv = ({ text }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: '-60px',
    initialInView: true,
  })

  return (
    <HeaderName ref={ref}
      variants={nameVariants}
      initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}>{text}</HeaderName>
  )
}

const HeaderDescDiv = ({ text }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: '-60px',
    initialInView: true
  })

  return (
    <HeaderDescription ref={ref}
      variants={descVariants}
      initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}>{text}</HeaderDescription>
  )
}

const HeaderButtonDiv = ({ text, openModal }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: '-60px',
    initialInView: true
  })

  return (
    <HeaderBtnWrap ref={ref}
      variants={btnVariants}
      initial='hidden' animate={inView ? 'fadeIn' : 'fadeOut'}>
      <Button onClick={openModal}>
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
