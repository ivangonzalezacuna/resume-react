import styled from 'styled-components'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { final } from '../../data/palette'

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${final.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundText = styled.h1`
  color: ${final.background_light};
  font-size: clamp(0.8rem, 7vw, 1.2rem);
  text-align: center;
  margin: 20px 20px 10px 20px;

  @media screen and (max-height: 400px) {
    margin: 10px;
    font-size: clamp(0.6rem, 7vw, 0.9rem);
  }
`

export const NotFoundAnimation = styled(Lottie)``

export const NotFoundBtnWrap = styled.div`
  margin: 35px 15px 15px 15px;
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-height: 400px) {
    margin: 10px;
  }
`

export const NotFoundBtn = styled(Link)`
  background: ${final.foreground_light2};
  color: ${final.background};
  padding: 16px 24px;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;

  &:hover {
    background: ${final.background_light};
  }
`