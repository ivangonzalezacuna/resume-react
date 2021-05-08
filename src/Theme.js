import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  background: {
    navbar: "#161616",
    sidebar: "#161616",
    initial: "#121212",
    section: "#161616",
    footer1: "#032236",
    footer2: "#063a5b",
    card: "#f9f9f9",
    error: "#101010",
    gray: "#343434",
    transparent: "transparent",
  },
  colors: {
    white: "#f9f9f9",
    gray: "#808080",
    placeholderGray: "#595959",
    black: "#121212",
    darkerBlue: "#005061",
    darkBlue: "#00738b",
    blue: "#00b5e1", //"#00a3cc"
    lightBlue: "#32d7ff",
    red: "#f00e0e",
    transparent: "transparent",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme