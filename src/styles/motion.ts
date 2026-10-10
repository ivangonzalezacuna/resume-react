import type { Variants } from "framer-motion";

// Shared reveal variants — a parent container orchestrates a staggered
// cascade of its children as the section scrolls into view. Each item
// fades and lifts into place, producing a polished sequential reveal
// instead of every sibling animating at once.

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
