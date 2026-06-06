import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.surface.low};
  border-top: 1px solid ${({ theme }) => theme.accent.slate};
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    padding: 32px 48px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const CopyrightText = styled.small`
  color: ${({ theme }) => theme.text.muted};
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 12px;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.text.muted};
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent.cyan};
  }
`;
