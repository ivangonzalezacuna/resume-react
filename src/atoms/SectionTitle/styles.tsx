import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 100px;
  padding: 0 50px;
  display: flex;

  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;

export const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.palette.primary.text};
  font-variant: small-caps;
  font-size: 24px;
  letter-spacing: 2px;
`;
