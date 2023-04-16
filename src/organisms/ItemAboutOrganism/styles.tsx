import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

export const ItemWrapper = styled.div`
  display: flex;
`;

export const ItemContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.palette.primary.text};

  margin-top: 20px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Separator = styled(motion.div)`
  border-bottom: 1px solid #eee;
`;

export const Collapsible = styled(motion.div)`
  color: ${({ theme }) => theme.palette.primary.text};
  margin-right: 10px;
  align-self: center;
  cursor: pointer;
`;

export const ItemBlockOne = styled.div`
  align-self: center;

  @media screen and (max-width: 500px) {
    align-self: start;
  }
`;

export const ItemBlockTwo = styled.div`
  align-self: center;

  @media screen and (max-width: 500px) {
    align-self: start;
  }
`;

export const Title = styled(motion.div)`
  font-size: ${({ theme }) => theme.text.timeline.title.dynamic};
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.palette.accent.text};

  font-size: clamp(1.2rem, 4vw, 1.5rem);
`;

export const Name = styled(motion.div)`
  font-size: clamp(0.7rem, 4vw, 0.8rem);
  padding: 5px;
`;

export const NameIconWork = styled(FaBuilding)`
  margin-right: 5px;
`;

export const NameIconStudy = styled(FaUniversity)`
  margin-right: 5px;
`;

export const Location = styled(motion.div)`
  font-size: clamp(0.7rem, 4vw, 0.8rem);
  padding: 5px;
`;

export const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 5px;
`;

export const Time = styled(motion.div)`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  font-size: clamp(0.6rem, 4vw, 0.7rem);
  background-color: ${({ theme }) => theme.palette.accent.textLight};
  color: ${({ theme }) => theme.palette.secondary.text};

  border-radius: 50px;
  padding: 0.2rem 0.4rem;
`;

export const DescriptionWrapper = styled(motion.div)`
  color: ${({ theme }) => theme.palette.primary.text};
  margin-top: 10px;
  overflow: hidden;
`;

export const DescriptionText = styled(motion.div)`
  font-size: clamp(0.7rem, 4vw, 0.8rem);
`;
