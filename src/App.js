import React, { useState, useEffect } from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import GlobalStyle from "./globalStyles";
import Theme from "./Theme";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home.js";
import AboutPage from "./pages/about.js";
import ContactPage from "./pages/contact.js";
import NotFoundPage from "./pages/404";

const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fastTransition, setFastTransition] = useState(false);
  const { i18n } = useTranslation("data");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const updateFastTransition = (value) => {
    setFastTransition(value);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      isFirstMount && setIsFirstMount(false);
    }
  }, [location, isFirstMount]);

  const setSpanish = () => {
    i18n.changeLanguage("es");
  };
  const setEnglish = () => {
    i18n.changeLanguage("en");
  };

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Navbar
          key="navbar"
          hideNav={location.pathname === "/"}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          updateFastTransition={updateFastTransition}
          currentLang={i18n.language}
          setSpanish={setSpanish}
          setEnglish={setEnglish}
        />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              element={
                <HomePage
                  isFirstMount={isFirstMount}
                  fastTransition={fastTransition}
                  updateFastTransition={updateFastTransition}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Theme>
    </>
  );
};

export default App;
