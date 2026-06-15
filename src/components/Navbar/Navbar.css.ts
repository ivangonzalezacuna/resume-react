import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

const navBase = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
  transition: "background-color 0.3s ease, border-color 0.3s ease",
});

export const nav = styleVariants({
  default: [
    navBase,
    {
      backgroundColor: "transparent",
      borderBottom: "1px solid transparent",
    },
  ],
  scrolled: [
    navBase,
    {
      backgroundColor: themeContract.surface.low,
      backdropFilter: "blur(8px)",
      borderBottom: `1px solid ${themeContract.accent.slate}`,
    },
  ],
});

export const navInner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1200px",
  padding: "0 24px",
  "@media": {
    "(min-width: 768px)": {
      padding: "0 48px",
    },
  },
});

export const navLinks = style({
  display: "none",
  gap: "32px",
  "@media": {
    "(min-width: 768px)": {
      display: "flex",
      alignItems: "center",
    },
  },
});

const navItemBase = style({
  textDecoration: "none",
  fontFamily: themeContract.font.narrative,
  fontSize: "14px",
  fontWeight: 500,
  transition: "color 0.2s ease",
  cursor: "pointer",
  ":hover": {
    color: themeContract.text.primary,
  },
});

export const navItem = styleVariants({
  default: [navItemBase, { color: themeContract.text.muted }],
  active: [navItemBase, { color: themeContract.accent.cyan }],
});

export const socialLinks = style({
  display: "none",
  gap: "16px",
  alignItems: "center",
  "@media": {
    "(min-width: 768px)": {
      display: "flex",
    },
  },
});

export const socialLink = style({
  color: themeContract.text.muted,
  display: "flex",
  alignItems: "center",
  transition: "color 0.2s ease",
  ":hover": {
    color: themeContract.accent.cyan,
  },
});

export const hamburgerButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: themeContract.text.primary,
  padding: "4px",
  "@media": {
    "(min-width: 768px)": {
      display: "none",
    },
  },
});
