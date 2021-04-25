import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  background: {
    navbar: "#121212",
    section: "#161616",
    footer1: "#032236",
    footer2: "#063a5b",
  },
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;