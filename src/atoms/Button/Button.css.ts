import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

const base = style({
  display: "inline-flex",
  alignItems: "center",
  fontFamily: themeContract.font.narrative,
  fontSize: "0.875rem",
  fontWeight: 500,
  padding: "8px 18px",
  borderRadius: "4px",
  textDecoration: "none",
  cursor: "pointer",
  transition: "background 0.2s ease, color 0.2s ease",
  whiteSpace: "nowrap",
  background: "transparent",
});

export const hrefBtnStyle = styleVariants({
  primary: [
    base,
    {
      color: themeContract.accent.cyan,
      border: `1px solid ${themeContract.accent.cyan}`,
      ":hover": {
        background: themeContract.accent.cyanAlpha,
      },
    },
  ],
  secondary: [
    base,
    {
      color: themeContract.text.muted,
      border: `1px solid ${themeContract.accent.slate}`,
      ":hover": {
        background: themeContract.accent.slateAlpha,
        color: themeContract.text.primary,
      },
    },
  ],
});
