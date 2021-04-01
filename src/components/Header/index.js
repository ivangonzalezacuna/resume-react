import React from 'react'
import HeaderBg from '../../images/header.jpg'
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
  hidden: { opacity: 0, transform: 'translateY(30vh)' },
  visible: {
    opacity: 1, transform: 'translateY(0vh)',
    transition: { delay: 1.2, duration: 1.5 },
  }
}

const Header = ({ openModal, header }) => {
  return (
    <HeaderSection>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderImage src={HeaderBg} alt='header' />
          <HeaderContent>
            <HeaderName
              variants={nameVariants}
              initial='hidden' animate='visible'>{header.name}</HeaderName>
            <HeaderDescription
              variants={descVariants}
              initial='hidden' animate='visible'>{header.description}</HeaderDescription>
            <HeaderBtnWrap
              variants={btnVariants}
              initial='hidden' animate='visible'>
              <Button onClick={openModal}>
                {header.contactButton}
              </Button>
            </HeaderBtnWrap>
          </HeaderContent>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderSection>
  )
}

export default Header
