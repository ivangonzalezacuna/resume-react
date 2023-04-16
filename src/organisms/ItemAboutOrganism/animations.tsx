import { Variants } from "framer-motion";

const ease = [0.6, -0.05, 0.01, 0.99];

export const item: Variants = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: ease,
    },
  },
};

export const separator: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const collapsible: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.7,
      ease: ease,
    },
  },
  collapsed: {
    opacity: 1,
    height: 0,
    transition: {
      duration: 0.7,
      ease: ease,
    },
  },
};
