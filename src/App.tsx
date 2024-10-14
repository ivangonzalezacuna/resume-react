import { useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Theme } from "./Theme";
import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components";
import { AboutPage, ContactPage, HomePage, NotFoundPage } from "./pages";

const App = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
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
