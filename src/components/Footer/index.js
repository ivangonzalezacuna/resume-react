import React from 'react'
import { FooterContainer, FooterWrap, Logo, SocialWrap, SocialIcon, Copyright, LogoImg } from './FooterElements'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa'
import { RiCopyrightLine } from 'react-icons/ri'
import IvanLogo from '../../images/background/logo.svg'

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
          <SocialWrap>
            <SocialIcon href={"http://www.facebook.com"} target="_blank"><FaFacebookF /></SocialIcon>
            <SocialIcon href={"http://www.github.com"} target="_blank"><FaGithub /></SocialIcon>
            <SocialIcon href={"http://www.instagram.com"} target="_blank"><FaInstagram /></SocialIcon>
            <SocialIcon href={"http://www.linkedin.com"} target="_blank"><FaLinkedinIn /></SocialIcon>
            <SocialIcon href={"http://www.skype.com"} target="_blank"><FaSkype /></SocialIcon>
          </SocialWrap>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
