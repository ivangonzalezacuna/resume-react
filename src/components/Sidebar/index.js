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
  initial: { height: 0, opacity: 1 },
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
    opacity: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

const sidebarMenu = {
  initial: { display: 'none' },
  animate: {
    display: 'block',
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  close: {
    display: 'none',
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    }
  }
}

const links = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  close: { y: 10, opacity: 0 },
}

const langs = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 }
  },
  close: {
    opacity: 0,
    transition: { duration: 0.2 }
  },
}

const Sidebar = ({
  isSidebarOpen, toggleSidebar, updateFastTransition,
  currentLang, setSpanish, setEnglish
}) => {
  const ref = useRef()

  const closeSidebar = e => {
    if (ref.current === e.target) {
      toggleSidebar()
    }
  }

  const switchPage = () => {
    updateFastTransition(false)
    toggleSidebar()
  }

  return (
    <>
      <SidebarContainer
        ref={ref}
        onClick={closeSidebar}
        initial='initial'
        animate={isSidebarOpen ? 'animate' : 'close'}
        variants={blackBox}>
        <LangMenu
          initial='initial'
          animate={isSidebarOpen ? 'animate' : 'close'}
          variants={langs}>
          <LangItem
            onClick={setEnglish}
            current={(currentLang === 'en' || currentLang === 'en-US') ? true : false}
          >EN</LangItem>
          <LangItem
            onClick={setSpanish}
            current={(currentLang === 'es' || currentLang === 'es-ES') ? true : false}
          >ES</LangItem>
        </LangMenu>
        <SidebarMenu variants={sidebarMenu}>
          <SidebarLinkItem variants={links}>
            <SidebarLink to='/' onClick={switchPage}>Home</SidebarLink>
          </SidebarLinkItem>
          <SidebarLinkItem variants={links}>
            <SidebarLink to='/about' onClick={switchPage}>About</SidebarLink>
          </SidebarLinkItem>
          {/*<SidebarLinkItem variants={links}>
            <SidebarLink to='/skills' onClick={switchPage}>Skills</SidebarLink>
          </SidebarLinkItem>*/}
          <SidebarLinkItem variants={links}>
            <SidebarLink to='/contact' onClick={switchPage}>Contact</SidebarLink>
          </SidebarLinkItem>
        </SidebarMenu>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
