const ease = [0.6, -0.05, 0.01, 0.99]
const modalEase = [0.76, 0, 0.24, 1]

export const modal = {
  hidden: { opacity: 0, transform: 'translateY(-100%)' },
  visible: {
    opacity: 1, transform: 'translateY(0%)',
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
      duration: 0.5,
      ease: modalEase,
    },
  },
  exit: {
    opacity: 0, transform: 'translateY(-100%)',
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
      ease: modalEase,
    },
  }
}

export const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7 },
  },
}

export const barContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: ease,
      delayChildren: 0.3,
      staggerChildren: 0.05,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      ease: ease,
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.3,
    },
  },
}

export const bar = level => ({
  hidden: { width: '0%' },
  visible: {
    width: level + '%',
    transition: { duration: 0.5 }
  },
  exit: {
    width: '0%',
    transition: { duration: 0.5 }
  }
})

export const value = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}