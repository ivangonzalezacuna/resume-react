import { Variants } from "framer-motion";

const ease = [0.87, 0, 0.13, 1];

export const container: Variants = {
  initial: { height: "100vh" },
  animate: {
    height: 0,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: ease,
    },
  },
};

export const text: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: ease,
    },
  },
};
