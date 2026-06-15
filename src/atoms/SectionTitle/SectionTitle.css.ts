import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const wrapperStyle = style({
  marginBottom: "32px",
});

export const titleStyle = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "28px",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: themeContract.text.primary,
  margin: 0,
  paddingBottom: "16px",
  borderBottom: `1px solid ${themeContract.accent.slate}`,
});
