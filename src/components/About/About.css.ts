import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const aboutSection = style({
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

export const bioBlock = style({
  marginTop: "1.5rem",
  maxWidth: "640px",
});

export const bioParagraph = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "16px",
  lineHeight: 1.75,
  color: themeContract.text.primary,
  margin: 0,
});

export const dossierGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "48px",
  marginTop: "48px",
  "@media": {
    "(min-width: 1280px)": {
      gridTemplateColumns: "3fr 2fr",
    },
  },
});

export const subHeading = style({
  fontFamily: themeContract.font.technical,
  fontSize: "11px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: themeContract.text.muted,
  margin: "0 0 16px 0",
  paddingBottom: "8px",
  borderBottom: `1px solid ${themeContract.accent.slate}`,
});

export const card = style({
  padding: "1.25rem",
  marginTop: "12px",
  border: `1px solid ${themeContract.accent.slate}`,
  borderRadius: "4px",
  backgroundColor: themeContract.surface.low,
  selectors: {
    "&:first-of-type": {
      marginTop: 0,
    },
  },
});

export const cardHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "12px",
  "@media": {
    "(min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "start",
    },
  },
});

export const degreeName = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "15px",
  fontWeight: 700,
  color: themeContract.text.primary,
  margin: 0,
  flex: 1,
});

export const metaColumn = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "4px",
  flexShrink: 0,
  "@media": {
    "(min-width: 768px)": {
      alignItems: "flex-end",
    },
  },
});

export const monoTag = style({
  fontFamily: themeContract.font.technical,
  fontSize: "12px",
  color: themeContract.text.muted,
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
});

export const descriptionList = style({
  margin: 0,
  padding: "0 0 0 20px",
  listStyleType: "disc",
});

export const descriptionItem = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "14px",
  color: themeContract.text.primary,
  lineHeight: 1.65,
  marginBottom: "4px",
});

export const tagRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginTop: "12px",
  paddingTop: "10px",
  borderTop: `1px solid ${themeContract.accent.slate}`,
});

export const languageList = style({
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

export const languageItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "14px 0",
  borderBottom: `1px solid ${themeContract.accent.slate}`,
  selectors: {
    "&:first-child": {
      paddingTop: 0,
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export const languageName = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "15px",
  fontWeight: 600,
  color: themeContract.text.primary,
});

export const proficiencyTag = style({
  fontFamily: themeContract.font.technical,
  fontSize: "12px",
  color: themeContract.text.muted,
  letterSpacing: "0.02em",
});
