import { style } from "@vanilla-extract/css";

export const section = style({
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
