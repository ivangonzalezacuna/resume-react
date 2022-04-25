import { Variants } from "framer-motion";

export const container: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
    },
  },
};

export const title: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
