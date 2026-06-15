import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const techTagStyle = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "3px 8px",
  background: themeContract.accent.tealAlpha,
  border: `1px solid ${themeContract.accent.teal}`,
  borderRadius: "2px",
  fontFamily: themeContract.font.technical,
  fontSize: "12px",
  color: themeContract.accent.teal,
  lineHeight: 1.4,
});
