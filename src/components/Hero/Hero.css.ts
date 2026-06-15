import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const heroSection = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "flex-start",
  boxSizing: "border-box",
  padding: "88px 24px 48px",
  "@media": {
    "(min-width: 768px)": {
      padding: "100px 48px 60px",
      alignItems: "center",
    },
    "(min-width: 1280px)": {
      padding: "120px 80px 80px",
    },
  },
});

export const heroInner = style({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "40px",
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "1fr auto",
      gap: "64px",
      alignItems: "center",
    },
  },
});

export const leftBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const heroName = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
  fontWeight: 700,
  color: themeContract.text.primary,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  margin: 0,
});

export const heroRole = style({
  fontFamily: themeContract.font.technical,
  fontSize: "0.8rem",
  fontWeight: 500,
  color: themeContract.text.muted,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  margin: 0,
});

export const heroSummary = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "1rem",
  fontWeight: 400,
  color: themeContract.text.muted,
  lineHeight: 1.7,
  maxWidth: "480px",
  margin: 0,
});

export const ctaRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "8px",
});

export const rightBlock = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  order: -1,
  "@media": {
    "(min-width: 768px)": {
      order: 0,
    },
  },
});

export const profileImageWrapper = style({
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  overflow: "hidden",
  border: `1px solid ${themeContract.border.subtle}`,
  flexShrink: 0,
  "@media": {
    "(min-width: 768px)": {
      width: "280px",
      height: "280px",
    },
  },
});

export const profileImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});
