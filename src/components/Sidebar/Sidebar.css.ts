import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const sidebarOverlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 98,
  backgroundColor: themeContract.surface.overlay,
});

const sidebarContainerBase = style({
  position: "fixed",
  top: 0,
  right: 0,
  width: "240px",
  height: "100vh",
  "@supports": {
    "(height: 100dvh)": {
      height: "100dvh",
    },
  },
  backgroundColor: themeContract.surface.low,
  borderLeft: `1px solid ${themeContract.accent.slate}`,
  zIndex: 99,
  display: "flex",
  flexDirection: "column",
  padding: "80px 24px 40px",
  transition: "transform 0.3s ease",
  "@media": {
    "(min-width: 768px)": {
      display: "none",
    },
  },
});

export const sidebarContainer = styleVariants({
  open: [sidebarContainerBase, { transform: "translateX(0)" }],
  closed: [sidebarContainerBase, { transform: "translateX(100%)" }],
});

export const sidebarNav = style({
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

const sidebarItemBase = style({
  textDecoration: "none",
  fontFamily: themeContract.font.narrative,
  fontSize: "18px",
  fontWeight: 500,
  padding: "16px 0",
  borderBottom: `1px solid ${themeContract.border.subtle}`,
  transition: "color 0.2s ease",
  ":hover": {
    color: themeContract.text.primary,
  },
});

export const sidebarItem = styleVariants({
  active: [sidebarItemBase, { color: themeContract.accent.cyan }],
  inactive: [sidebarItemBase, { color: themeContract.text.muted }],
});
