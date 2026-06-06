import styled from "styled-components";

export const LogoAnchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const LogoWord = styled.div`
  display: flex;
  align-items: baseline;
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;

export const Bracket = styled.span`
  color: ${({ theme }) => theme.accent.violet};
`;

export const IvanText = styled.span`
  color: ${({ theme }) => theme.accent.cyan};
  letter-spacing: -0.02em;
`;

export const LogoUnderline = styled.div`
  width: 46px;
  height: 1px;
  background-color: ${({ theme }) => theme.accent.slate};
`;
