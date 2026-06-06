import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.accent.slate};
`;
