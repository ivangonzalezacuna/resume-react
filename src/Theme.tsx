import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  background: {
    primary: "#161616",
    secondary: "#f9f9f9",
    initial: "#121212",
    transparent: "transparent",
    error: "#101010",
    accent: "#032236",
    footer: "#063a5b",
  },
  colors: {
    primary: "#f9f9f9",
    secondary: "#161616",
    accent: "#00b5e1", //"#00a3cc"
    accentDark: "#005061",
    accentLight: "#32d7ff",
    error: "#f00e0e",
    placeholder: "#595959",
    transparent: "transparent",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
