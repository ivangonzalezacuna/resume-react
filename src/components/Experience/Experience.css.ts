import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const experienceSection = style({
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

export const card = style({
  padding: "1.5rem",
  marginTop: "1.5rem",
  border: `1px solid ${themeContract.accent.slate}`,
  borderRadius: "4px",
  backgroundColor: themeContract.surface.low,
});

export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "16px",
});

export const companyName = style({
  fontSize: "18px",
  fontWeight: 700,
  color: themeContract.text.primary,
  margin: 0,
});

export const metaRow = style({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  alignItems: "center",
});

export const monoTag = style({
  fontFamily: themeContract.font.technical,
  fontSize: "12px",
  color: themeContract.text.muted,
  letterSpacing: "0.02em",
});

export const roleDivider = style({
  border: "none",
  borderTop: `1px solid ${themeContract.accent.slate}`,
  margin: "14px 0",
  opacity: 0.4,
});

export const roleBlock = style({
  marginBottom: "14px",
  selectors: {
    "&:last-of-type": {
      marginBottom: 0,
    },
  },
});

export const roleHeader = style({
  display: "flex",
  alignItems: "baseline",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "8px",
});

export const roleTitle = style({
  fontSize: "15px",
  fontWeight: 700,
  color: themeContract.text.primary,
});

export const roleDuration = style({
  fontFamily: themeContract.font.technical,
  fontSize: "12px",
  color: themeContract.text.muted,
});

export const descriptionList = style({
  margin: 0,
  padding: "0 0 0 20px",
  listStyleType: "disc",
});

export const descriptionItem = style({
  fontSize: "14px",
  color: themeContract.text.primary,
  lineHeight: 1.65,
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
