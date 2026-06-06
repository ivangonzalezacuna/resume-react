import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.surface.base};
    background-image: radial-gradient(circle, ${({ theme }) => theme.border.dotGrid} 1px, transparent 1px);
    background-size: 8px 8px;
    color: ${({ theme }) => theme.text.primary};
    font-family: ${({ theme }) => theme.font.narrative};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent.cyan};
    outline-offset: 3px;
    border-radius: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
