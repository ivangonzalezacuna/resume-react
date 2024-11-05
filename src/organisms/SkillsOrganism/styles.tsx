import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  padding: 0 20px;

  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`;
