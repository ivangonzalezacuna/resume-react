import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SectionContainer = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 20px;

  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`

export const Tag = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f911;
  color: ${props => props.theme.colors.accent};
  border: 2px solid ${props => props.theme.colors.accentDark};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: clamp(0.8rem, 4vw, 1rem);
  margin: 5px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    padding: 6px 12px;
  }
`