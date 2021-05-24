const ease = [0.6, -0.05, 0.01, 0.99]

export const container = (isFirstMount, fastTransition) => ({
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: isFirstMount ? 2 : fastTransition ? 0 : 0.5,
    },
  },
})

export const item = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0, opacity: 1,
    transition: {
      duration: 0.7,
      ease: ease,
    },
  },
}

export const icons = {
  initial: { opacity: 0 },
  animate: { opacity: 1, },
}