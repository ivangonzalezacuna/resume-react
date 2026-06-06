import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.surface.low};
  display: flex;
  justify-content: center;
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  width: 80%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  margin: 8px 0;
`;

export const LogoImg = styled.img`
  height: 23px;
  width: auto;
`;

export const Copyright = styled.small`
  color: ${({ theme }) => theme.text.primary};
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
