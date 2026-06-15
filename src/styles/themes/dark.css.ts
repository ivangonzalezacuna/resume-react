import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "../theme.css";

export const darkTheme = createTheme(themeContract, {
  surface: {
    base: "#0A0C0D",
    low: "#141819",
    mid: "#1D2224",
    high: "#2B3134",
    overlay: "rgba(10,12,13,0.6)",
  },
  accent: {
    cyan: "#2FD9F4",
    // reserved exclusively for the {ivan} logo brackets and {i} favicon — do not use elsewhere
    violet: "#8B5CF6",
    teal: "#0D9488",
    slate: "#444748",
    cyanAlpha: "rgba(47,217,244,0.08)",
    slateAlpha: "rgba(68,71,72,0.3)",
  },
  text: {
    primary: "#E6EDF3",
    muted: "#94A3B8",
  },
  border: {
    subtle: "rgba(255,255,255,0.08)",
    dotGrid: "#ffffff05",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48px",
  },
  font: {
    narrative: "'Plus Jakarta Sans', sans-serif",
    technical: "'JetBrains Mono', monospace",
  },
});
