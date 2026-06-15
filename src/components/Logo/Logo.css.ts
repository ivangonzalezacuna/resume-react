import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const logoAnchorStyle = style({
  textDecoration: "none",
  cursor: "pointer",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
});

export const logoWordStyle = style({
  display: "flex",
  alignItems: "baseline",
  fontFamily: themeContract.font.narrative,
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: 1,
});

export const bracketStyle = style({
  color: themeContract.accent.violet,
});

export const ivanTextStyle = style({
  color: themeContract.accent.cyan,
  letterSpacing: "-0.02em",
});

export const logoUnderlineStyle = style({
  width: "46px",
  height: "1px",
  backgroundColor: themeContract.accent.slate,
});
