import styled from "styled-components";

export const Tech = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  background: ${({ theme }) => theme.accent.teal}15;
  border: 1px solid ${({ theme }) => theme.accent.teal};
  border-radius: 2px;
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 12px;
  color: ${({ theme }) => theme.accent.teal};
  line-height: 1.4;
`;
