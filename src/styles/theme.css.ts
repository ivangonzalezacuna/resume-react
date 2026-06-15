import { createThemeContract } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  surface: {
    base: null,
    low: null,
    mid: null,
    high: null,
    overlay: null,
  },
  accent: {
    cyan: null,
    violet: null,
    teal: null,
    slate: null,
    cyanAlpha: null,
    slateAlpha: null,
  },
  text: {
    primary: null,
    muted: null,
  },
  border: {
    subtle: null,
    dotGrid: null,
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  font: {
    narrative: null,
    technical: null,
  },
});
