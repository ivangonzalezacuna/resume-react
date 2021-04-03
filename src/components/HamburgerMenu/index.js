import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MobileIcon, IconWrap } from './HamburgerMenuElements'

const Hamburger = (props) => {
  return (
    <motion.path
      fill='transparent'
      strokeLinecap='round'
      strokeWidth='3.5'
      {...props}
    />
  )
}

const MenuBars = ({ isOpen }) => {
  const transition = { duration: 0.3 }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28">
      <Hamburger
        stroke="#f9f9f9"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 6.5 L 26 6.5" },
          open: { d: "M 5.5 22.5 L 22.5 5.5" },
        }}
        transition={transition}
      />
      <Hamburger
        d="M 6 14 L 26 14"
        stroke="#f9f9f9"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={transition}
      />
      <Hamburger
        stroke="#f9f9f9"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 4 21.5 L 26 21.5" },
          open: { d: "M 5.5 5.5 L 22.5 22.5" },
        }}
        transition={transition}
      />
    </svg>
  )
}

const HamburgerMenu = ({
  toggleSidebar, isSidebarOpen, toggleAbout, isAboutOpen
}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= window.innerHeight * 0.80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const generalToggle = () => {
    if (isAboutOpen) {
      toggleAbout()
    } else {
      toggleSidebar()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <MobileIcon onClick={generalToggle} showIcon={(isSidebarOpen || isAboutOpen)} >
        <IconWrap scrollNav={scrollNav} >
          <MenuBars isOpen={(isSidebarOpen || isAboutOpen)} />
        </IconWrap>
      </MobileIcon>
    </>
  )
}

export default HamburgerMenu