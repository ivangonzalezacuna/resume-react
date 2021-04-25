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
    i18n.changeLanguage("es")
  }
  const setEnglish = () => {
    i18n.changeLanguage("en")
  }

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Navbar key='navbar'
          hideNav={(location.pathname === "/") ? true : false}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          updateFastTransition={updateFastTransition}
          currentLang={i18n.language}
          setSpanish={setSpanish}
          setEnglish={setEnglish} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact
              render={() => (
                <HomePage
                  isFirstMount={isFirstMount}
                  fastTransition={fastTransition}
                  updateFastTransition={updateFastTransition} />
              )}
            />
            <Route path="/about"
              render={() => (
                <AboutPage fastTransition={fastTransition} />
              )}
            />
            <Route path="/skills"
              render={() => (
                <SkillsPage fastTransition={fastTransition} />
              )}
            />
            <Route path="/contact"
              render={() => (
                <ContactPage fastTransition={fastTransition} />
              )}
            />
          </Switch>
        </AnimatePresence>
      </Theme>
    </>
  )
}

export default App