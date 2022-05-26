import { motion } from "framer-motion";

export const RouteTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
