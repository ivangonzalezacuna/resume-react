import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  background: #063a5b;
  background: linear-gradient(
    0deg,
    rgba(6,58,91,1) 80%,
    rgba(3,34,54,1) 90%,
    rgba(22,22,22,1) 100%);
  display: flex;
  justify-content: center;
`

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  width: 80%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const Logo = styled.div`
  color: #f9f9f9;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  margin: 8px 0;
`

export const Copyright = styled.small`
  color: #f9f9f9;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
`

export const SocialIcon = styled.a`
  font-size: 24px;
  margin: 0 8px;
  color: #f9f9f9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`