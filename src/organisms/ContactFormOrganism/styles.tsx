import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  height: auto;
  width: 100%;
  padding: 0 20px;
  max-width: 900px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const Content = styled.div`
  border-radius: 10px;
  position: block;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.primary.background};
`;

export const Wrapper = styled.form`
  padding: 20px 30px;
`;

export const Item = styled.div`
  text-align: start;
  margin-bottom: 0.5rem;
  width: 100%;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.palette.error.text};
  }
`;

export const Label = styled(motion.label)`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.primary.text};

  span {
    color: ${({ theme }) => theme.palette.accent.textLight};
    font-weight: 700;
    margin-left: 5px;
  }
`;

export const Input = styled(motion.input)`
  display: block;
  padding: 0 10px;
  outline: none;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  border: none;
  opacity: 0.7;
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.text};
    font-size: 14px;
  }

  &:focus {
    opacity: 1;
    border: 2px solid ${({ theme }) => theme.palette.accent.textLight};
  }
`;

export const TextArea = styled(motion.textarea)`
  display: block;
  padding: 10px;
  outline: none;
  border-radius: 4px;
  width: 100%;
  border: none;
  opacity: 0.7;
  resize: vertical;
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.text};
    font-size: 14px;
  }

  &:focus {
    opacity: 1;
    border: 2px solid ${({ theme }) => theme.palette.accent.textLight};
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.palette.error.text};
  background: ${({ theme }) => theme.palette.error.background};
  border-radius: 2px;
  font-size: 0.8rem;
  margin: 0.5rem;
  padding: 5px;
  text-align: center;
`;
