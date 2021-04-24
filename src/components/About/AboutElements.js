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

export const PersonalInfoContainer = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
  cursor: default;
`

export const PersonalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    justify-content: center;
  }
`

export const ImgAnimateWrap = styled(motion.div)`
  height: 200px;
  width: 200px;
  border-radius: 10%;
  overflow: hidden;
`

export const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10%;
  transition: transform 0.8s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
  }
`

export const AboutWrap = styled.div`
  min-height: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 10px;
`

export const Name = styled(motion.h1)`
  margin-bottom: 20px;
  font-weight: 700;
  color: #f9f9f9;
  text-align: center;

  span {
    font-weight: 400;
    font-size: 85%;
    color: #f9f9f9;
  }
`

export const Description = styled(motion.span)`
  color: #f9f9f9;
  font-size: 15px;
  padding: 10px;
`

export const BtnWrap = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-self: center;
  margin: 20px;
`

export const Btn = styled.a`
  padding: 12px 32px;
  background: #f9f9f9;
  border-radius: 50px;
  color: #121212;
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: blue;
    color: #f9f9f9;
  }
`