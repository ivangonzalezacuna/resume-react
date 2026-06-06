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
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  padding: 8px 20px;
  background: transparent;
  color: ${({ theme }) => theme.text.primary};
  border: ${({ theme }) => `3px solid ${theme.text.primary}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.surface.mid};
    color: ${({ theme }) => theme.text.primary};
    border: ${({ theme }) => `3px solid ${theme.surface.mid}`};
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
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  padding: 8px 20px;
  background: transparent;
  color: ${({ theme }) => theme.text.primary};
  border: ${({ theme }) => `3px solid ${theme.text.primary}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.surface.mid};
    color: ${({ theme }) => theme.text.primary};
    border: ${({ theme }) => `3px solid ${theme.surface.mid}`};
  }

  @media screen and (max-width: 500px) {
    padding: 8px 16px;
  }
`;
