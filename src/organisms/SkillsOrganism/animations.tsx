import { Variants } from "framer-motion";

const ease = [0.6, -0.05, 0.01, 0.99];

export const title: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: ease,
    },
  },
};

export const container: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: ease,
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

export const tag: Variants = {
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