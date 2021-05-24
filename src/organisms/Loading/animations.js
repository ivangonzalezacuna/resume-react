export const loading = {
  hidden: { opacity: 0, transform: 'translateY(-100%)' },
  visible: {
    opacity: 1, transform: 'translateY(0%)',
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0, transform: 'translateY(-100%)',
    transition: { duration: 0.4 },
  }
}