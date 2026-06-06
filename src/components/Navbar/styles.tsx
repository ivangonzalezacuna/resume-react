import styled, { css } from "styled-components";

export const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  ${({ $scrolled, theme }) =>
    $scrolled
      ? css`
          background-color: ${theme.surface.low};
          backdrop-filter: blur(8px);
          border-bottom: 1px solid ${theme.accent.slate};
        `
      : css`
          background-color: transparent;
          border-bottom: 1px solid transparent;
        `}
`;

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 48px;
  }
`;

export const NavLinks = styled.div`
  display: none;
  gap: 32px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const NavItem = styled.a<{ $active: boolean }>`
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 14px;
  font-weight: 500;
  color: ${({ $active, theme }) => ($active ? theme.accent.cyan : theme.text.muted)};
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const SocialLinks = styled.div`
  display: none;
  gap: 16px;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text.muted};
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent.cyan};
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
  padding: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`;
