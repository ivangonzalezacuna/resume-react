import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceSection = styled.section`
  width: 100%;
  padding: 96px 24px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 96px 48px;
  }

  @media (min-width: 1280px) {
    padding: 120px 80px;
  }
`;

export const SectionInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Card = styled(motion.div)`
  padding: 1.5rem;
  margin-top: 1.5rem;
  border: 1px solid ${({ theme }) => theme.accent.slate};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.surface.low};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

export const MonoTag = styled.span`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 12px;
  color: ${({ theme }) => theme.text.muted};
  letter-spacing: 0.02em;
`;

export const RoleDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.accent.slate};
  margin: 14px 0;
  opacity: 0.4;
`;

export const RoleBlock = styled.div`
  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const RoleTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
`;

export const RoleDuration = styled.span`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 12px;
  color: ${({ theme }) => theme.text.muted};
`;

export const DescriptionList = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style: disc;
`;

export const DescriptionItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.65;
  margin-bottom: 4px;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.accent.slate};
  opacity: 0.75;
`;
