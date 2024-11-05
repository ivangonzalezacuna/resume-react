import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f911;
  color: ${({ theme }) => theme.palette.accent.text};
  border: 2px solid ${({ theme }) => theme.palette.accent.textDark};
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  font-size: ${({ theme }) => theme.text.skills.tag.dynamic};
  margin: 0.3rem;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    padding: 0.3rem 0.6rem;
  }
`;
