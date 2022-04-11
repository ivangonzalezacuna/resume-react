const ease = [0.6, -0.05, 0.01, 0.99];

export const form = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: ease,
      when: "beforeChildren",
      staggerChildren: 0.025,
    },
  },
};

export const item = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: ease },
  },
};

export const btn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: ease },
  },
};
