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

const PageMain = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const Section = styled.section`
  width: 100%;
  padding: 96px 24px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 96px 48px;
  }

  @media (min-width: 1280px) {
    padding: 120px 80px;
  }
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
        <Section id="contact" />
      </PageMain>
      <Footer />
    </Theme>
  );
};

export default App;
