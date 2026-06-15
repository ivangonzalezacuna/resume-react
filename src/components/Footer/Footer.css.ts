import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";

export const footerContainer = style({
  width: "100%",
  backgroundColor: themeContract.surface.low,
  borderTop: `1px solid ${themeContract.accent.slate}`,
});

export const footerInner = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  textAlign: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px",
  "@media": {
    "(min-width: 768px)": {
      flexDirection: "row",
      gap: "0",
      textAlign: "left",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "32px 48px",
    },
  },
});

export const footerLeft = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  "@media": {
    "(min-width: 768px)": {
      alignItems: "flex-start",
    },
  },
});

export const footerRight = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  "@media": {
    "(min-width: 768px)": {
      justifyContent: "flex-end",
    },
  },
});

export const copyrightText = style({
  color: themeContract.text.muted,
  fontFamily: themeContract.font.technical,
  fontSize: "12px",
});

export const footerLink = style({
  color: themeContract.text.muted,
  display: "flex",
  alignItems: "center",
  transition: "color 0.2s ease",
  cursor: "pointer",
  ":hover": {
    color: themeContract.accent.cyan,
  },
});
