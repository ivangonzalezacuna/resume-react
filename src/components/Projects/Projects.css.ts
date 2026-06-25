import { style, globalStyle } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const projectsSection = style({
  width: "100%",
  padding: "96px 24px",
  boxSizing: "border-box",
  "@media": {
    "(min-width: 768px)": { padding: "96px 48px" },
    "(min-width: 1280px)": { padding: "120px 80px" },
  },
});

export const sectionInner = style({
  maxWidth: "960px",
  margin: "0 auto",
});

export const projectGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1.5rem",
  marginTop: "1.5rem",
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const card = style({
  padding: "1.5rem",
  border: `1px solid ${themeContract.accent.slate}`,
  borderRadius: "4px",
  backgroundColor: themeContract.surface.low,
  display: "flex",
  flexDirection: "column",
});

export const cardHeader = style({
  marginBottom: "12px",
});

export const projectTitle = style({
  fontSize: "16px",
  fontWeight: 700,
  color: themeContract.text.primary,
  margin: "0 0 6px 0",
  lineHeight: 1.4,
});

export const projectTitleLink = style({
  fontSize: "16px",
  fontWeight: 700,
  color: themeContract.accent.cyan,
  textDecoration: "none",
  margin: "0 0 6px 0",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  lineHeight: 1.4,
  ":hover": {
    textDecoration: "underline",
  },
});

globalStyle(`${projectTitleLink} svg`, {
  width: "13px",
  height: "13px",
  flexShrink: 0,
  opacity: 0.75,
});

globalStyle(`${projectTitleLink}:hover svg`, {
  opacity: 1,
});

export const summary = style({
  fontSize: "14px",
  color: themeContract.text.muted,
  lineHeight: 1.65,
  margin: "0 0 12px 0",
});

export const highlightList = style({
  margin: "0 0 12px 0",
  padding: "0 0 0 20px",
  listStyleType: "disc",
  flex: 1,
});

export const highlightItem = style({
  fontSize: "13px",
  color: themeContract.text.primary,
  lineHeight: 1.6,
  marginBottom: "4px",
});

export const tagRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginTop: "16px",
  paddingTop: "12px",
  borderTop: `1px solid ${themeContract.accent.slate}`,
});
