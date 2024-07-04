import { Header } from "../components";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      variants={{
        initialState: {
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        animateState: {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        exitState: {
          y: "-100vh",
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
      }}
      className="base-page-size"
    >
      <Header />
    </motion.div>
  );
};
