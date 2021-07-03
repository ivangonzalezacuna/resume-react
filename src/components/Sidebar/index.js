import React, { useRef } from 'react'
import { container, langs, links, menu } from './animations'
import {
  SidebarContainer,
  SidebarLink,
  SidebarLinkItem,
  SidebarMenu,
  LangMenu,
  LangItem
} from './SidebarElements'

const Sidebar = ({
  isSidebarOpen, toggleSidebar, updateFastTransition,
  currentLang, setSpanish, setEnglish, data
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
        variants={container}>
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
        <SidebarMenu variants={menu}>
          {data.info.map((navData, index) => (
            <SidebarLinkItem key={index} variants={links}>
              <SidebarLink to={navData.link} onClick={switchPage}>
                {navData.title}
              </SidebarLink>
            </SidebarLinkItem>
          ))}
        </SidebarMenu>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
