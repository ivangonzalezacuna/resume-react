const ease = [0.76, 0, 0.24, 1]

export const container = {
  initial: { height: 0, opacity: 1 },
  animate: {
    height: '100vh',
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
      duration: 0.5,
      ease: ease,
    },
  },
  close: {
    height: 0,
    opacity: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: ease,
    },
  },
}

export const menu = {
  initial: { display: 'none' },
  animate: {
    display: 'block',
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
      duration: 0.5,
      ease: ease,
    },
  },
  close: {
    display: 'none',
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: ease,
    }
  }
}

export const links = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  close: { y: 10, opacity: 0 },
}

export const langs = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 }
  },
  close: {
    opacity: 0,
    transition: { duration: 0.2 }
  },
}