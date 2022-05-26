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

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    justify-content: center;
  }
`;

export const ImgAnimateWrap = styled(motion.div)`
  height: 200px;
  width: 200px;
  border-radius: 10%;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10%;
  transition: transform 0.8s ease;
  overflow: hidden;

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
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: clamp(1.6rem, 6vw, 2.2rem);

  span {
    font-weight: 700;
    font-size: 110%;
    margin-left: 5px;
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const Description = styled(motion.span)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 15px;
  padding: 10px;
  margin-bottom: 20px;
`;
