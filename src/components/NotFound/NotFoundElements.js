import styled from 'styled-components'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie-player'

export const NotFoundContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background: ${props => props.theme.background.initial};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export const NotFoundAnimation = styled(Lottie)`
  height: min(70vh, 70vw);
  width: min(70vh, 70vw);
`