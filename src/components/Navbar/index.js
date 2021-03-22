import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavMenu,
  Logo,
  NavMenuLink,
  MobileIcon,
  NavLang,
  NavLangItem
} from './NavbarElements'

const Navbar = ({
  menuData,
  toggleSidebar,
  toggleAbout,
  setLangES,
  setLangEN,
  currentLang
}) => {
  const [scrollNav, setScrollNav] = useState(false)
  //const [hideLogo, setHideLogo] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= window.innerHeight * 0.80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  /*const changeLogo = () => {
    if (window.scrollY >= 200 && window.scrollY <= 500) {
      setHideLogo(true)
    } else {
      setHideLogo(false)
    }
  }*/

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    //window.addEventListener('scroll', changeLogo)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <IconContext.Provider value={{ color: '#f9f9f9' }}>
      <Nav scrollNav={scrollNav}>
        <Logo to='/' onClick={toggleHome}>ivan</Logo>
        <MobileIcon onClick={toggleSidebar}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLink to={item.link} key={index}
              onClick={item.link === 'about' ? toggleAbout : undefined}
              smooth={true} duration={500} spy={true}
              exact='true' offset={-50}>
              {item.title}
            </NavMenuLink>
          ))}
        </NavMenu>
        <NavLang>
          <NavLangItem onClick={setLangEN}
            current={(currentLang === "en" || currentLang === "en-US") ? true : false}>
            EN
            </NavLangItem>
          <NavLangItem onClick={setLangES}
            current={(currentLang === "es" || currentLang === "es-ES") ? true : false}>
            ES
            </NavLangItem>
        </NavLang>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
