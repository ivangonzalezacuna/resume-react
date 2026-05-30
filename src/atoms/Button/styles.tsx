import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-self: center;
`;

export const FormButtonWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
`;

export const HrefBtn = styled.a`
  font-size: ${({ theme }) => theme.text.button.dynamic};
  padding: 8px 20px;
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.primary.text};
  border: ${({ theme }) => `3px solid ${theme.palette.primary.text}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.palette.secondary.background};
    color: ${({ theme }) => theme.palette.secondary.text};
    border: ${({ theme }) => `3px solid ${theme.palette.secondary.background}`};
  }

  @media screen and (max-width: 500px) {
    padding: 8px 16px;
  }

  @media screen and (max-height: 300px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

export const FormBtn = styled.button`
  font-size: ${({ theme }) => theme.text.button.dynamic};
  padding: 8px 20px;
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.primary.text};
  border: ${({ theme }) => `3px solid ${theme.palette.primary.text}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.palette.secondary.background};
    color: ${({ theme }) => theme.palette.secondary.text};
    border: ${({ theme }) => `3px solid ${theme.palette.secondary.background}`};
  }

  @media screen and (max-width: 500px) {
    padding: 8px 16px;
  }
`;
