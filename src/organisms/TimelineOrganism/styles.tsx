import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  padding: 0 50px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 0 25px;
  }
`;

export const Container = styled.div`
  position: relative;
  margin-left: 115px;
  border-radius: 0 0px 0px 0;
  padding: 5px 0;

  &:after {
    content: "";
    width: 3px;
    height: 100%;
    background: ${({ theme }) => theme.palette.secondary.background};
    position: absolute;
    left: -118px;
    top: 0;
  }

  @media screen and (max-width: 500px) {
    margin-left: 15px;

    &:after {
      left: -18px;
    }
  }
`;

export const Item = styled.div`
  position: relative;

  &:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.palette.primary.text};
    background: ${({ theme }) => theme.palette.primary.background};
    position: absolute;
    left: -124px;
    top: 0px;
    z-index: 2;
  }

  @media screen and (max-width: 500px) {
    top: 20px;
    padding-top: 20px;

    &:after {
      left: -24px;
      top: -20px;
    }
  }
`;

export const Time = styled.div`
  position: absolute;
  left: -100px;
  top: -2px;
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 100%;
    left: 0px;
    top: -25px;
    padding: 4px 0 4px 5px;
  }
`;

export const TimeText = styled(motion.p)`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.primary.text};

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.text.timeline.text.dynamic};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.palette.primary.text};

  @media screen and (max-width: 500px) {
    margin-bottom: 60px;
    padding: 0 5px;
  }
`;

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.text.timeline.title.dynamic};
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.palette.accent.text};
`;

export const Subtitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.text.timeline.subtititle.dynamic};
  margin-bottom: 15px;
  font-weight: 400;
  color: #f9f9f9dd;
`;

export const DescriptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: start;
  font-size: ${({ theme }) => theme.text.timeline.description.dynamic};
  color: ${({ theme }) => `${theme.palette.primary.text}bb}`};
  margin: 2px 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.text.timeline.description.dynamic};
  white-space: pre-wrap;
`;

export const Dot = styled.div`
  background-color: ${({ theme }) => `${theme.palette.primary.text}bb}`};
  height: 6px;
  width: 6px;
  border-radius: 6px;
`;
