import styled from "styled-components";
import { Theme } from "./Theme";
import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Experience } from "./organisms/Experience";
import { Projects } from "./organisms/Projects";
import { Skills } from "./organisms/Skills";
import { About } from "./organisms/About";
import { Contact } from "./organisms/Contact";

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
