import styled from 'styled-components'
import { final } from '../../data/palette'

export const HeaderSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  cursor: default;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

export const HeaderContainer = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.2) 0%,
      rgba(0,0,0,0.3) 75%,
      rgba(0,0,0,0.9) 100%),
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`

export const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

export const HeaderContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: ${final.background_light};
`

export const HeaderName = styled.h1`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  text-align: left;
  margin-bottom: 0.8rem;
`

export const HeaderDescription = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  margin-bottom: 1.2rem;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
`

export const HeaderButton = styled.div`
  background: ${final.foreground_light2};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 50px;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  color: ${final.background};
  font-size: 14px;

  &:hover {
    background: ${final.background_light};
    color: ${final.background};
  }
`