import { Variants } from "framer-motion";

export const container: Variants = {
  hover: {
    y: -10,
    transition: {
      repeat: 3,
      repeatType: "reverse",
      duration: 0.25,
    },
  },
};
