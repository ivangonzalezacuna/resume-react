import { Variants } from "framer-motion";

export const container: Variants = {
  initial: { height: 0, width: 0, opacity: 0 },
  animate: {
    height: "auto",
    width: "auto",
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
      duration: 0.5,
      ease: "backInOut",
    },
  },
  close: {
    height: 0,
    width: 0,
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: "backIn",
    },
  },
};

export const menu: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
      duration: 0.5,
      ease: "backOut",
    },
  },
  close: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.1,
      ease: "backIn",
    },
  },
};

export const langs: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5, ase: "backOut" },
  },
  close: {
    opacity: 0,
    transition: { duration: 0.1, ease: "backIn" },
  },
};
