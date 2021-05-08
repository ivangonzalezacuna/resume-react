import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SectionTitleWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 100px;
  padding: 0 50px;
  display: flex;

  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`

export const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
`