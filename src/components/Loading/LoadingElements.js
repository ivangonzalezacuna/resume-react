import styled from 'styled-components'
import { final } from '../../data/palette'
import Lottie from 'react-lottie'

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${final.background};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingAnimation = styled(Lottie)``