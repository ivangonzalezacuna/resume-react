import React, { useState, useEffect } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa'
import {
  SidebarContainer, SidebarWrapper,
  SidebarMenu, SidebarLink,
  SocialMediaWrap, SocialIcons,
  SocialIconLink, Lang,
  LangItem
} from './SidebarElements'

const Sidebar = ({
  isSidebarOpen, toggleSidebar,
  menuData, social,
  toggleAbout, setLangES,
  setLangEN, currentLang
}) => {

  const [scrollOffset, setScrollOffset] = useState(-50)

  const func1 = () => {
    toggleSidebar()
  }
  const func2 = (link) => {
    if (link === 'about') {
      toggleAbout()
    }
  }

  const changeScrollOffset = () => {
    if (window.innerHeight < 400) {
      setScrollOffset(0)
    } else {
      setScrollOffset(-50)
    }
  }

  useEffect(() => {
    changeScrollOffset()
    window.addEventListener('resize', changeScrollOffset)
  })

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <Lang>
        <LangItem onClick={setLangEN}
          current={(currentLang === "en" || currentLang === "en-US") ? true : false}>
          EN
          </LangItem>
        <LangItem onClick={setLangES}
          current={(currentLang === "es" || currentLang === "es-ES") ? true : false}>
          ES
          </LangItem>
      </Lang>
      <SidebarWrapper onClick={toggleSidebar}>
        <SidebarMenu>
          {menuData.map((info, index) => (
            <SidebarLink to={info.link} key={index}
              onClick={() => { func1(); func2(info.link); }}
              smooth={true} duration={500} spy={true}
              exact='true' offset={scrollOffset}>{info.title}</SidebarLink>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
      <SocialMediaWrap onClick={toggleSidebar}>
        <SocialIcons>
          <SocialIconLink href={social.linkedinLink} target="_blank" aria-label={social.linkedinLabel}>
            <FaLinkedinIn />
          </SocialIconLink>
          <SocialIconLink href={social.githubLink} target="_blank" aria-label={social.githubLabel}>
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href={social.skypeLink} target="_blank" aria-label={social.skypeLabel}>
            <FaSkype />
          </SocialIconLink>
          <SocialIconLink href={social.instagramLink} target="_blank" aria-label={social.instagramLabel}>
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href={social.facebookLink} target="_blank" aria-label={social.facebookLabel}>
            <FaFacebookF />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </SidebarContainer>
  )
}

export default Sidebar
