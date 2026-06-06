import styled from "styled-components";
import { Theme } from "./Theme";
import { GlobalStyle } from "./globalStyles";
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
    <Theme>
      <GlobalStyle />
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
    </Theme>
  );
};

export default App;
