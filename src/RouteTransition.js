import React from "react";
import { motion } from "framer-motion";

const RouteTransition = ({ children }) => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default RouteTransition;
