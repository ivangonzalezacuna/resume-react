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
