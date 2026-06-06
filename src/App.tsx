import styled from "styled-components";
import { Theme } from "./Theme";
import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

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
        <Section id="hero" />
        <Section id="experience" />
        <Section id="projects" />
        <Section id="skills" />
        <Section id="about" />
        <Section id="contact" />
      </PageMain>
      <Footer />
    </Theme>
  );
};

export default App;
