import { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Theme } from "./Theme";
import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components";
import { AboutPage, ContactPage, HomePage, NotFoundPage } from "./pages";

const App = () => {
  const location = useLocation();

  const [isFirstMount, setIsFirstMount] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [fastTransition, setFastTransition] = useState(false);

  useEffect(() => {
    if (location.pathname != "/") {
      isFirstMount && setIsFirstMount(false);
    }
  }, [location, isFirstMount]);

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Navbar
          hideNav={location.pathname === "/"}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setFastTransition={setFastTransition}
        />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <HomePage
                  isFirstMount={isFirstMount}
                  fastTransition={fastTransition}
                  setFastTransition={setFastTransition}
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
