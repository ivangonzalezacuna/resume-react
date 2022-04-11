const ease = [0.6, -0.05, 0.01, 0.99];

export const container = {
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const item = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: ease },
  },
};

export const card = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const icon = {
  initial: { scale: 1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: ease },
  },
};
