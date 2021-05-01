import styled from 'styled-components'
import { motion } from 'framer-motion'

export const InitialTransitionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  z-index: 100;
`

export const InitialTransitionText = styled(motion.h1)`
  color: #f9f9f9;
`