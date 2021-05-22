import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  Logo,
  Copyright,
  LogoImg
} from './FooterElements'
import { RiCopyrightLine } from 'react-icons/ri'
import IvanLogo from '../../images/background/logo.svg'
import SocialIcons from '../../molecules/SocialIcons'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <Logo onClick={scrollToTop}>
            <LogoImg src={IvanLogo} alt="logo" />
          </Logo>
          <Copyright>
            <RiCopyrightLine style={{ marginRight: '4px' }} />
            {new Date().getFullYear()} Iván Gonzalez. All rights reserved.
            </Copyright>
          <SocialIcons row />
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
