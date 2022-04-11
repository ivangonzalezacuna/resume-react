const ease = [0.87, 0, 0.13, 1];

export const container = {
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

export const text = {
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
