import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MdClose } from 'react-icons/md'

export const SkillsContainer = styled(motion.div)`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #161616;
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

export const SkillGrid = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  align-items: center;
  grid-gap: 24px;
  padding: 100px 24px;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const SkillCard = styled(motion.div)`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: auto;
  padding: 20px;
  cursor: default;

  &:hover {
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.3);
  }
`

export const SkillName = styled(motion.h2)`
  font-weight: bold;
  font-size: 1.1rem;
  color: #121212;
  margin: 10px 0;
`

export const SkillLogoWrap = styled(motion.div)`
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`

export const SkillLogo = styled.img`
  height: 80px;
  width: 80px;
`

export const SkillLevelWrap = styled(motion.div)`
  width: 100%;
  height: 15px;
  background: #121212;
  border-radius: 4px;
  margin: 10px 0 30px 0;
`

export const SkillLevelBar = styled(motion.div)`
  background: red;
  height: 100%;
  width: ${({ skill }) => skill ? skill : '0%'};
  border-radius: 4px;
`

export const SkillLevelValue = styled(motion.p)`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
  padding-top: 2px;
`

export const SkillBtn = styled(motion.div)`
  background: blue;
  color: #f9f9f9;
  border-radius: 50px;
  outline: none;
  padding: 8px 14px;
  transition: 0.4s;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    background: green;
  }
`

export const SkillDescWrap = styled(motion.div)`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  background: #e9e9e9;
  border-radius: 8px;
`

export const SkillDesc = styled(motion.p)`
  color: #121212;
  font-size: 13px;
`

export const ModalOverlay = styled.div`
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

export const ModalContainer = styled(motion.div)`
  height: auto;
  padding: 28px 3px 3px 3px;
  width: 50vw;
  max-width: 400px;
  background: black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`

export const CloseIcon = styled(MdClose)`
  position: absolute;
  top: 0;
  right: 0;
  color: #f9f9f9;
  font-size: 1.5rem;
  margin: 4px;
  cursor: pointer;
`

export const ModalContentWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f9f9f9;
`

