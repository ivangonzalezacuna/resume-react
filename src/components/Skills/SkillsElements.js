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
  background: ${props => props.theme.background.primary};
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
  color: ${props => props.theme.colors.primary};
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
  grid-template-columns: repeat(auto-fill, 250px);
  align-items: center;
  justify-content: center;
  grid-gap: 24px;
  padding: 100px 24px;

  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const SkillCard = styled(motion.div)`
  background: ${props => props.theme.background.secondary};
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
  color: ${props => props.theme.colors.secondary};
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
  background: ${props => props.theme.background.primary};
  border-radius: 4px;
  margin: 10px 0 30px 0;
`

export const SkillLevelBar = styled(motion.div)`
  background: ${props => props.theme.colors.accent};
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
  background: ${props => props.theme.background.primary};
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
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin: 4px;
  cursor: pointer;
`

export const ModalContentWrap = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.primary};
`

export const ModalTitle = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.accent};
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`

export const ModalDescription = styled.p`
  font-size: 1rem;
  padding: 0 5px;
  color: ${props => props.theme.colors.primary};
`

