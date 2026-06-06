import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px 10px 0px 10px;
`;

export const TechnologySection = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const TechnologyTitle = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text.primary};
`;

export const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  gap: 10px;
  max-width: 60%;
  justify-content: flex-end;

  @media screen and (max-width: 640px) {
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`;
