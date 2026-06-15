import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const skillsSection = style({
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

export const skillsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
  marginTop: "1.5rem",
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "(min-width: 1280px)": {
      gridTemplateColumns: "repeat(6, 1fr)",
    },
  },
});

export const categoryColumn = style({
  padding: "1rem",
  border: `1px solid ${themeContract.accent.slate}`,
  borderRadius: "4px",
  backgroundColor: themeContract.surface.low,
});

export const categoryHeader = style({
  fontFamily: themeContract.font.technical,
  fontSize: "11px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: themeContract.text.muted,
  margin: "0 0 12px 0",
});

export const tagRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
});
