import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  padding: 30px 10px 0px 10px;
  color: ${({ theme }) => theme.palette.primary.text};
`;

export const Card = styled.div`
  padding: 1rem;
  margin: 20px 0px;
  border: ${({ theme }) => `1px solid ${theme.palette.accent.textDark}`};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.palette.primary.box};
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 8px;
  }
`;

export const CompanyWrapper = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CompanyName = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const CompanyLocation = styled.div`
  font-size: 12px;
  opacity: 60%;
  margin: 3px 0;
`;

export const CompanyDuration = styled.div`
  font-size: 14px;
  opacity: 80%;
`;

interface SeparatorProps {
  width: number;
}

export const Separator = styled.div<SeparatorProps>`
  margin: 16px auto;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.primary.text}`};
  width: ${({ width }) => `${width}%`};
  opacity: 30%;
`;

export const RoleCard = styled.div``;

export const RoleHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
  }
`;

export const RoleTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const RoleDuration = styled.div`
  font-size: 12px;
  opacity: 80%;
`;

export const RoleDescriptionContainer = styled.ul`
  padding: 10px 20px;
`;

export const RoleDescriptionItem = styled.li`
  font-size: 14px;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Tech = styled(motion.div)`
  padding: 4px 8px;
  margin: 4px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  background-color: ${({ theme }) => theme.palette.accent.textDark};
`;
