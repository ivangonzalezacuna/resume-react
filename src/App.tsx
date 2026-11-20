import { useEffect } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import "./styles/global.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

const App = () => {
  useEffect(() => {
    let scrollReset: number | undefined;

    const resetScrollForCleanUrl = () => {
      window.clearTimeout(scrollReset);
      if (window.location.hash) return;

      // Wait until after the browser restores the history entry's scroll position.
      scrollReset = window.setTimeout(() => {
        if (!window.location.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }, 0);
    };

    resetScrollForCleanUrl();
    window.addEventListener("popstate", resetScrollForCleanUrl);
    window.addEventListener("pageshow", resetScrollForCleanUrl);

    return () => {
      window.clearTimeout(scrollReset);
      window.removeEventListener("popstate", resetScrollForCleanUrl);
      window.removeEventListener("pageshow", resetScrollForCleanUrl);
    };
  }, []);

  return (
    <div>
      <a className="skip-nav" href="#main-content">
        Skip to main content
      </a>
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main
            id="main-content"
            tabIndex={-1}
            style={{ width: "100%", minHeight: "100dvh" }}
          >
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </main>
          <Footer />
        </MotionConfig>
      </LazyMotion>
    </div>
  );
};

export default App;
