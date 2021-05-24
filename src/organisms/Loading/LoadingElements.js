import styled from 'styled-components'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie-player'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(30,30,30,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`

export const Popup = styled(motion.div)`
  width: 150px;
  height: 150px;
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Animation = styled(Lottie)`
  height: 150px;
  width: 150px;
`