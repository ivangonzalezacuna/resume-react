import React from 'react'
import { FooterContainer, FooterWrap, Logo, SocialWrap, SocialIcon, Copyright } from './FooterElements'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa'
import { RiCopyrightLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <Logo>ivan</Logo>
          <Copyright>
            <RiCopyrightLine style={{ marginRight: '4px' }} />
            {new Date().getFullYear()} Iván Gonzalez. All rights reserved.
            </Copyright>
          <SocialWrap>
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaGithub /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
            <SocialIcon><FaLinkedinIn /></SocialIcon>
            <SocialIcon><FaSkype /></SocialIcon>
          </SocialWrap>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
