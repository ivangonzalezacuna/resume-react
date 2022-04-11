import styled from "styled-components";
import { motion } from "framer-motion";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  margin: 8px 0;
`;

export const Icon = styled(motion.a)`
  font-size: 24px;
  margin: ${({ row }) => (row ? "0 8px" : "8px 0")};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    margin: ${({ row }) => (row ? "0 4px" : "4px 0")};
    margin-top: ${({ header }) => (header ? "20px" : "0")};
  }
`;
