import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import Skills from '../components/SkillsSection'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Loading from '../components/Loading'
import ScrollToTop from '../components/ScrollToTop'
import HamburgerMenu from '../components/HamburgerMenu'

const Resume = ({ t, i18n }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen)
  }

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const setLangES = () => {
    i18n.changeLanguage("es")
  }
  const setLangEN = () => {
    i18n.changeLanguage("en")
  }

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2250)
  }, [])

  return (
    <>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollToTop />
          <HamburgerMenu
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            toggleAbout={toggleAbout}
            isAboutOpen={isAboutOpen} />
          <Contact
            showModal={showModal}
            setShowModal={setShowModal}
            contactForm={t('contactForm', { returnObjects: true })} />
          <About
            currentLang={i18n.language}
            setLangES={setLangES}
            setLangEN={setLangEN}
            isAboutOpen={isAboutOpen}
            toggleAbout={toggleAbout}
            about={t('about', { returnObjects: true })}
            social={t('social', { returnObjects: true })}
            openModal={openModal} />
          <Sidebar
            currentLang={i18n.language}
            setLangES={setLangES}
            setLangEN={setLangEN}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            toggleAbout={toggleAbout}
            menuData={t('navBar', { returnObjects: true })}
            social={t('social', { returnObjects: true })} />
          <Navbar
            currentLang={i18n.language}
            setLangES={setLangES}
            setLangEN={setLangEN}
            toggleAbout={toggleAbout}
            menuData={t('navBar', { returnObjects: true })} />
          <Header
            header={t('header', { returnObjects: true })}
            openModal={openModal} />
          <InfoSection
            info={t('work', { returnObjects: true })} />
          <InfoSection
            info={t('education', { returnObjects: true })} />
          <Skills
            skills={t('skills', { returnObjects: true })} />
          <Footer
            social={t('social', { returnObjects: true })} />
        </>
      )}
    </>
  )
}

export default Resume