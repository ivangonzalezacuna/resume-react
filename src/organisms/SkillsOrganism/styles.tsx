import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 20px;

  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`;

export const Tag = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f911;
  color: ${({ theme }) => theme.palette.accent.text};
  border: 2px solid ${({ theme }) => theme.palette.accent.textDark};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.text.skills.tag.dynamic};
  margin: 5px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    padding: 6px 12px;
  }
`;
