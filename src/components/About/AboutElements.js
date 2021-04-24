import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AboutContainer = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: #161616;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f9f9f9;
`

export const TitleWrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 100px;
  padding: 0 50px;
`

export const Title = styled(motion.h1)`
  color: #f9f9f9;
  text-transform: uppercase;
  font-size: 18px;
`

export const SectionTitleWrap = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 150px 50px 50px 50px;
  justify-content: start;
`

export const SectionTitle = styled(motion.p)`
  color: #f9f9f9;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
`