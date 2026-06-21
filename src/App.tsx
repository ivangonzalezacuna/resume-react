import { LazyMotion, domAnimation } from "framer-motion";
import { darkTheme } from "./styles/themes/dark.css";
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
  return (
    <div className={darkTheme}>
      <a className="skip-nav" href="#main-content">
        Skip to main content
      </a>
      <LazyMotion features={domAnimation}>
        <Navbar />
        <main id="main-content" style={{ width: "100%", minHeight: "100vh" }}>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </LazyMotion>
    </div>
  );
};

export default App;
