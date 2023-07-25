import { Variants } from "framer-motion";

export const container = (
  isFirstMount: boolean,
  fastTransition: boolean,
): Variants => ({
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: isFirstMount ? 2.3 : fastTransition ? 0.3 : 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    y: -10,
    transition: {
      repeat: 3,
      repeatType: "reverse",
      duration: 0.25,
    },
  },
});
