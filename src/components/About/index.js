import React from 'react'
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaSkype } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  AboutContainer, Icon,
  CloseIcon, AboutWrapper,
  AboutGrid, AboutImg,
  AboutInfo, AboutImgWrap,
  AboutName, AboutDescription,
  BtnWrap, BtnDownload,
  ContactWrapper, ContactSection,
  ContactIconDiv, ContactSectionTitle,
  ContactSectionItem, ContactInfoDiv,
  ContactIconImg, ImgWrap,
  SocialMedia, SocialMediaWrap,
  SocialLogo, WebsiteRights,
  SocialIcons, SocialIconLink,
  TopLineWrap, TopLine
} from './AboutElements'

const About = ({
  isAboutOpen,
  toggleAbout,
  openModal,
  about,
  social
}) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <AboutContainer isAboutOpen={isAboutOpen}>
      <Icon onClick={toggleAbout}>
        <CloseIcon />
      </Icon>
      <AboutWrapper>
        <AboutGrid>
          <AboutImgWrap>
            <ImgWrap>
              <AboutImg src={about.img} alt='profile-pic' />
            </ImgWrap>
          </AboutImgWrap>
          <AboutInfo>
            <AboutName><span>{about.name1}</span> {about.name2}</AboutName>
            <AboutDescription>
              {about.description}
            </AboutDescription>
            <BtnWrap>
              <BtnDownload href={about.resumeLink} target="_blank">{about.resumeBtn}</BtnDownload>
            </BtnWrap>
          </AboutInfo>
        </AboutGrid>
        <TopLineWrap>
          <TopLine>{about.contactTitle}</TopLine>
        </TopLineWrap>
        <ContactWrapper>
          <ContactSection>
            <ContactIconDiv>
              <ContactIconImg><FaPhoneAlt /></ContactIconImg>
            </ContactIconDiv>
            <ContactInfoDiv>
              <ContactSectionTitle>{about.phoneTitle}</ContactSectionTitle>
              <ContactSectionItem>{about.phoneItem}</ContactSectionItem>
            </ContactInfoDiv>
          </ContactSection>
          <ContactSection>
            <ContactIconDiv>
              <ContactIconImg><FaEnvelope /></ContactIconImg>
            </ContactIconDiv>
            <ContactInfoDiv>
              <ContactSectionTitle>{about.mailTitle}</ContactSectionTitle>
              <ContactSectionItem>{about.mailItem}</ContactSectionItem>
            </ContactInfoDiv>
          </ContactSection>
          <ContactSection>
            <ContactIconDiv>
              <ContactIconImg><FaMapMarkerAlt /></ContactIconImg>
            </ContactIconDiv>
            <ContactInfoDiv>
              <ContactSectionTitle>{about.addressTitle}</ContactSectionTitle>
              <ContactSectionItem>{about.addressItem}</ContactSectionItem>
            </ContactInfoDiv>
          </ContactSection>
        </ContactWrapper>
        <BtnWrap>
          <BtnDownload onClick={openModal}>{about.contactBtn}</BtnDownload>
        </BtnWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={() => { toggleHome(); toggleAbout(); }}>ivan</SocialLogo>
            <WebsiteRights>ivan &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink key={0} href={social.linkedinLink} target="_blank" aria-label={social.linkedinLabel}>
                <FaLinkedinIn />
              </SocialIconLink>
              <SocialIconLink key={1} href={social.githubLink} target="_blank" aria-label={social.githubLabel}>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink key={2} href={social.skypeLink} target="_blank" aria-label={social.skypeLabel}>
                <FaSkype />
              </SocialIconLink>
              <SocialIconLink key={3} href={social.instagramLink} target="_blank" aria-label={social.instagramLabel}>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink key={4} href={social.facebookLink} target="_blank" aria-label={social.facebookLabel}>
                <FaFacebookF />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About
