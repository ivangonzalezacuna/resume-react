import React, { useState, useEffect } from "react"
import { Switch, Route, useLocation, useHistory } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import GlobalStyle from "./globalStyles"
import AboutPage from "./pages/about.js"
import HomePage from "./pages/home.js"
import ContactPage from "./pages/contact.js"
import SkillsPage from "./pages/skills.js"
import Navbar from "./components/Navbar"
import { useTranslation } from 'react-i18next'
import Theme from "./Theme"
import NotFoundPage from "./pages/404"
import InitialTransition from "./components/InitialTransition"

const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true)
  const location = useLocation()
  const history = useHistory()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [fastTransition, setFastTransition] = useState(false)
  const { i18n } = useTranslation('data')

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const updateFastTransition = (value) => {
    setFastTransition(value)
  }

  useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false)
    })
    return unlisten
  }, [history, isFirstMount])

  const setSpanish = () => {
    i18n.changeLanguage('es')
  }
  const setEnglish = () => {
    i18n.changeLanguage('en')
  }

  return (
    <>
      <Theme>
        <GlobalStyle />
        {isFirstMount && <InitialTransition isFirstMount={isFirstMount} />}
        <Navbar key='navbar'
          hideNav={location.pathname === "/"}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          updateFastTransition={updateFastTransition}
          currentLang={i18n.language}
          setSpanish={setSpanish}
          setEnglish={setEnglish} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <HomePage
                isFirstMount={isFirstMount}
                fastTransition={fastTransition}
                updateFastTransition={updateFastTransition} />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/skills">
              <SkillsPage fastTransition={fastTransition} />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </AnimatePresence>
      </Theme>
    </>
  )
}

export default App