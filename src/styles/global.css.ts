import { globalStyle } from "@vanilla-extract/css";
import { themeContract } from "./theme.css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("html", {
  scrollBehavior: "smooth",
  fontSize: "16px",
});

globalStyle("body", {
  backgroundColor: themeContract.surface.base,
  backgroundImage: `radial-gradient(circle, ${themeContract.border.dotGrid} 1px, transparent 1px)`,
  backgroundSize: "8px 8px",
  color: themeContract.text.primary,
  fontFamily: themeContract.font.narrative,
  lineHeight: 1.6,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  overflowX: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
});

globalStyle("body::-webkit-scrollbar", {
  display: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle(":focus-visible", {
  outline: `2px solid ${themeContract.accent.cyan}`,
  outlineOffset: "3px",
  borderRadius: "2px",
});

globalStyle("*, *::before, *::after", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "0.01ms",
      animationIterationCount: 1,
      transitionDuration: "0.01ms",
    },
  },
});

globalStyle(".skip-nav", {
  position: "absolute",
  left: "-9999px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  zIndex: 1000,
  padding: "8px 16px",
  backgroundColor: themeContract.surface.low,
  color: themeContract.accent.cyan,
  fontFamily: themeContract.font.narrative,
  fontSize: "14px",
  textDecoration: "none",
  borderRadius: "4px",
});

globalStyle(".skip-nav:focus", {
  position: "fixed",
  top: "8px",
  left: "8px",
  width: "auto",
  height: "auto",
});
