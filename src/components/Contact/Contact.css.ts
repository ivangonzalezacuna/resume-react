import { style } from "@vanilla-extract/css";
import { themeContract } from "../../styles/theme.css";
import {
  section as sectionStyle,
  sectionInner,
} from "../../styles/section.css";

export { sectionInner };
export const contactSection = style([
  sectionStyle,
  { background: themeContract.surface.base },
]);

export const callout = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "1.125rem",
  color: themeContract.text.muted,
  lineHeight: 1.7,
  maxWidth: "640px",
  margin: "0 0 56px",
});

export const linkList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

export const linkItem = style({
  borderBottom: `1px solid ${themeContract.border.subtle}`,
  selectors: {
    "&:first-child": {
      borderTop: `1px solid ${themeContract.border.subtle}`,
    },
  },
});

export const channelRow = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "28px 0",
});

export const channelAnchor = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textDecoration: "none",
  cursor: "pointer",
  color: themeContract.text.primary,
  transition: "color 0.2s ease",
  ":hover": {
    color: themeContract.accent.cyan,
  },
  "@media": {
    "(min-width: 768px)": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
    },
  },
});

export const channelName = style({
  fontFamily: themeContract.font.narrative,
  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
  fontWeight: 500,
  letterSpacing: "-0.01em",
});

export const channelMeta = style({
  fontFamily: themeContract.font.technical,
  fontSize: "0.75rem",
  color: themeContract.text.muted,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  selectors: {
    [`${channelAnchor}:hover &`]: {
      color: themeContract.accent.cyan,
    },
  },
});
