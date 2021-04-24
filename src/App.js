import React, { useState, useEffect } from "react"
import { Switch, Route, useLocation, useHistory } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import GlobalStyle from "./globalStyles"
import AboutPage from "./pages/about.js"
import HomePage from "./pages/home.js"
import ContactPage from "./pages/contact.js"
import SkillsPage from "./pages/skills.js"
import Navbar from "./components/Navbar"

const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true)
  const location = useLocation()
  const history = useHistory()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [fastTransition, setFastTransition] = useState(false)

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

  return (
    <>
      <GlobalStyle />
      <Navbar key='navbar'
        hideNav={(location.pathname === "/") ? true : false}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        updateFastTransition={updateFastTransition} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact
            render={() => (
              <HomePage
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
                isFirstMount={isFirstMount}
                fastTransition={fastTransition}
                updateFastTransition={updateFastTransition} />
            )}
          />
          <Route path="/about"
            render={() => (
              <AboutPage
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
                isFirstMount={false}
                fastTransition={fastTransition} />
            )}
          />
          <Route path="/skills"
            render={() => (
              <SkillsPage
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
                isFirstMount={false}
                fastTransition={fastTransition} />
            )}
          />
          <Route path="/contact"
            render={() => (
              <ContactPage
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
                isFirstMount={false}
                fastTransition={fastTransition} />
            )}
          />
        </Switch>
      </AnimatePresence>
    </>
  )
}

export default App