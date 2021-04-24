import React, { useRef } from 'react'
import {
  SidebarContainer,
  SidebarLink,
  SidebarLinkItem,
  SidebarMenu,
  LangMenu,
  LangItem
} from './SidebarElements'

const blackBox = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: '100vh',
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  close: {
    height: 0,
    opacity: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

const links = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  close: { y: 10, opacity: 0 },
}

const langs = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  close: { opacity: 0, duration: 0.2 },
}

const Sidebar = ({ isSidebarOpen, toggleSidebar, updateFastTransition }) => {
  const ref = useRef()

  return (
    <>
      <SidebarContainer
        ref={ref}
        onClick={toggleSidebar}
        initial="initial"
        animate={isSidebarOpen ? "animate" : "close"}
        variants={blackBox}>
        <LangMenu
          initial='initial'
          animate={isSidebarOpen ? "animate" : "close"}
          variants={langs}>
          <LangItem>EN</LangItem>
          <LangItem>ES</LangItem>
        </LangMenu>
        <SidebarMenu>
          <SidebarLinkItem variants={links}>
            <SidebarLink to="/" onClick={() => {
              updateFastTransition(false)
              toggleSidebar()
            }}>Home</SidebarLink>
          </SidebarLinkItem>
          <SidebarLinkItem variants={links}>
            <SidebarLink to="/about" onClick={() => {
              updateFastTransition(false)
              toggleSidebar()
            }}>About</SidebarLink>
          </SidebarLinkItem>
          <SidebarLinkItem variants={links}>
            <SidebarLink to="/skills" onClick={() => {
              updateFastTransition(false)
              toggleSidebar()
            }}>Skills</SidebarLink>
          </SidebarLinkItem>
          <SidebarLinkItem variants={links}>
            <SidebarLink to="/contact" onClick={() => {
              updateFastTransition(false)
              toggleSidebar()
            }}>Contact</SidebarLink>
          </SidebarLinkItem>
        </SidebarMenu>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
