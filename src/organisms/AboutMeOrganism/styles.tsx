import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 200px;
  width: 200px;
  border-radius: 10%;
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
    transform: scale(1.2);
  }
`;

export const ContentWrapper = styled.div`
  min-height: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 10px;
`;

export const Name = styled(motion.h1)`
  color: ${({ theme }) => theme.palette.primary.text};
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: clamp(1.6rem, 6vw, 2.2rem);

  span {
    font-weight: 700;
    font-size: 110%;
    margin-left: 5px;
    color: ${({ theme }) => theme.palette.accent.text};
  }
`;

export const Description = styled(motion.span)`
  color: ${({ theme }) => theme.palette.primary.text};
  font-size: 15px;
  padding: 10px;
  margin-bottom: 20px;
`;
