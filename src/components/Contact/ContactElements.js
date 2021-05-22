import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContactContainer = styled(motion.div)`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  margin-bottom: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.background.primary};
  cursor: default;
`

export const SectionTitle = styled(motion.h1)`
  font-size: clamp(1.7rem, 8vw, 3rem);
  letter-spacing: 1.5px;
  color: ${props => props.theme.colors.placeholder};
  text-align: center;
  padding: ${({ submitted }) => submitted ? '150px 50px 50px 50px' : '150px 50px 10px 50px'} ;
`