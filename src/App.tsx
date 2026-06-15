import styled from "styled-components";
import { LazyMotion, domAnimation } from "framer-motion";
import { Theme } from "./Theme";
import { GlobalStyle } from "./globalStyles";
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

const PageMain = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <div className={darkTheme}>
      <Theme>
        <GlobalStyle />
        <LazyMotion features={domAnimation}>
          <Navbar />
          <PageMain>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </PageMain>
          <Footer />
        </LazyMotion>
      </Theme>
    </div>
  );
};

export default App;
