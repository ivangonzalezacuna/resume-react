const ease = [0.6, -0.05, 0.01, 0.99]

export const item = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0, opacity: 1,
    transition: {
      duration: 0.7,
      ease: ease,
    },
  },
}