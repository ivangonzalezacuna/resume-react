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
  background: ${(props) => props.theme.background.primary};
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
    color: ${(props) => props.theme.colors.error};
  }
`;

export const Label = styled(motion.label)`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.primary};

  span {
    color: ${(props) => props.theme.colors.accentLight};
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

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
    font-size: 12px;
  }

  &:focus {
    opacity: 1;
    border: 2px solid ${(props) => props.theme.colors.accentLight};
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

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
    font-size: 12px;
  }

  &:focus {
    opacity: 1;
    border: 2px solid ${(props) => props.theme.colors.accentLight};
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme.colors.error};
  background: ${(props) => props.theme.background.error};
  border-radius: 2px;
  font-size: 0.8rem;
  margin: 0.5rem;
  padding: 5px;
  text-align: center;
`;
