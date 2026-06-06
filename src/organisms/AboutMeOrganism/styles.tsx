import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    justify-self: center;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  transition: transform 0.8s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

export const Name = styled(motion.h1)`
  color: ${({ theme }) => theme.text.primary};
  font-size: clamp(1.6rem, 6vw, 2.2rem);
  font-weight: 400;
  text-align: center;
  margin: 0.4rem 0;

  span {
    font-weight: 700;
    font-size: 110%;
    color: ${({ theme }) => theme.accent.cyan};
  }
`;

export const Description = styled(motion.span)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 15px;
  padding: 10px;
  margin: 0.4rem 0;
`;
