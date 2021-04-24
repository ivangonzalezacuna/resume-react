import React from 'react'
import { motion } from 'framer-motion'
import { HamburgerMenu, LangItem, LangMenu, Logo, Nav, NavItem, NavMenu } from './NavbarElements'
import Sidebar from '../Sidebar'

const Stroke = (props) => {
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
      <Stroke
        stroke="#f9f9f9"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 6.5 L 26 6.5" },
          open: { d: "M 5.5 22.5 L 22.5 5.5" },
        }}
        transition={transition}
      />
      <Stroke
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
      <Stroke
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

const Navbar = ({ hideNav, isSidebarOpen, toggleSidebar, updateFastTransition }) => {
  const checkToggleSidebar = e => {
    if (isSidebarOpen) {
      e.preventDefault()
      toggleSidebar()
    } else {
      updateFastTransition(true)
    }
  }
  return (
    <>
      <Nav hideNav={hideNav}>
        <Logo to="/" onClick={checkToggleSidebar}>ivan</Logo>
        <NavMenu>
          <NavItem to="/"
            onClick={() => updateFastTransition(true)}>Home</NavItem>
          <NavItem to="/about"
            onClick={() => updateFastTransition(true)}>About</NavItem>
          <NavItem to="/skills"
            onClick={() => updateFastTransition(true)}>Skills</NavItem>
          <NavItem to="/contact"
            onClick={() => updateFastTransition(true)}>Contact</NavItem>
        </NavMenu>
        <LangMenu>
          <LangItem>EN</LangItem>
          <LangItem>ES</LangItem>
        </LangMenu>
        <HamburgerMenu onClick={toggleSidebar} sidebarOpen={isSidebarOpen}>
          <MenuBars isOpen={isSidebarOpen} />
        </HamburgerMenu>
      </Nav>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        updateFastTransition={updateFastTransition} />
    </>
  )
}

export default Navbar