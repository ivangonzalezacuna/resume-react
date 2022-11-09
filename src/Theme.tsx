import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const themeNew: DefaultTheme = {
  palette: {
    primary: {
      background: "#161616",
      text: "#f9f9f9",
    },
    secondary: {
      background: "#f9f9f9",
      text: "#161616",
    },
    error: {
      background: "#101010",
      text: "#f00e0e",
    },
    accent: {
      background: "#032236",
      text: "#00b5e1", //"#00a3cc"
      textLight: "#32d7ff",
      textDark: "#005061",
    },
    footer: "#063a5b",
    transparent: "transparent",
    splashBg: "#121212",
  },
  font: ["Dosis", "sans-serif"],
  text: {
    button: {
      static: "0.8rem",
      dynamic: "clamp(0.9rem, 3vw, 1.1rem)",
    },
    home: {
      name: {
        static: "",
        dynamic: "clamp(2rem, 8vw, 5rem)",
      },
      desription: {
        static: "",
        dynamic: "clamp(1rem, 3vw, 1.4rem)",
      },
    },
    skills: {
      tag: {
        static: "",
        dynamic: "clamp(0.8rem, 4vw, 1rem)",
      },
    },
    timeline: {
      text: {
        static: "",
        dynamic: "clamp(13px, 5vw, 15px)",
      },
      title: {
        static: "",
        dynamic: "clamp(1.2rem, 5vw, 1.4rem)",
      },
      subtititle: {
        static: "",
        dynamic: "clamp(1rem, 4vw, 1.1rem)",
      },
      description: {
        static: "",
        dynamic: "clamp(0.8rem, 3vw, 0.9rem)",
      },
    },
  },
};

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={themeNew}>{children}</ThemeProvider>
);
