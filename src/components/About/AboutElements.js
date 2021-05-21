import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MdClose } from 'react-icons/md'

export const AboutContainer = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 100px;
  height: auto;
  background: ${props => props.theme.background.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: default;
`

export const PersonalInfoContainer = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
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
  color: ${props => props.theme.colors.primary};
  text-align: center;

  span {
    font-weight: 400;
    font-size: 85%;
    color: ${props => props.theme.colors.primary};
  }
`

export const Description = styled(motion.span)`
  color: ${props => props.theme.colors.primary};
  font-size: 15px;
  padding: 10px;
  margin-bottom: 20px;
`

export const TimelineWrap = styled.div`
  padding: 0 50px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 0 25px;
  }
`

export const Timeline = styled.div`
  position: relative;
  margin-left: 115px;
  border-radius: 0 0px 0px 0;
  padding: 5px 0;

  &:after {
    content: '';
    width: 3px;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    left: -118px;
    top: 0;
  }
  
  @media screen and (max-width: 500px) {
    margin-left: 15px;
    
    &:after {
      left: -18px;
    }
  }
`

export const TimelineItem = styled.div`
  position: relative;

  &:after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.background.primary};
    position: absolute;
    left: -124px;
    top: 0px;
    z-index: 2;
  }

  @media screen and (max-width: 500px) {
    top: 20px;
    padding-top: 20px;

    &:after {
      left: -24px;
      top: -20px;
    }
  }
`

export const ItemTime = styled.div`
  position: absolute;
  left: -100px;
  top: -2px;
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 100%;
    left: 0px;
    top: -25px;
    padding: 4px 0 4px 5px;
  }
`

export const TimeText = styled(motion.p)`
  font-size: 13px;
  color: ${props => props.theme.colors.primary};

  @media screen and (max-width: 500px) {
    font-size: clamp(13px, 5vw, 15px);
  }
`

export const ItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.primary};

  @media screen and (max-width: 500px) {
    margin-bottom: 60px;
    padding: 0 5px;
  }
`

export const ItemTitle = styled(motion.h1)`
  font-size: clamp(1.2rem, 5vw, 1.4rem);
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.accent};
`

export const ItemSubtitle = styled(motion.h2)`
  font-size: clamp(1rem, 4vw, 1.1rem);
  margin-bottom: 15px;
  font-weight: 400;
  color: #f9f9f9dd;
`

export const ItemDescription = styled(motion.p)`
  font-size: clamp(0.8rem, 3vw, 0.9rem);
  margin-bottom: 15px;
  color: #f9f9f9bb;
`

export const SectionContainer = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
`

export const SkillWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 20px;

  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`

export const SkillTagWrap = styled(motion.div)``

export const SkillTag = styled(motion.div)`
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

export const SkillModalOverlay = styled.div`
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

export const SkillModalContainer = styled(motion.div)`
  height: auto;
  padding: 28px 3px 3px 3px;
  width: 80vw;
  max-width: 400px;
  background: ${props => props.theme.background.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //box-shadow: 1px 1px 1px ${props => props.theme.colors.accentDark};
  border: 1px solid ${props => props.theme.colors.accentDark};
`

export const SkillCloseIcon = styled(MdClose)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin: 4px;
  cursor: pointer;
`

export const SkillModalContentWrap = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.secondary};
`

export const SkillName = styled(motion.h2)`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.accent};
  margin: 10px 0;
`

export const SkillLogoWrap = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  background: ${props => props.theme.background.secondary};
`

export const SkillLogo = styled.img`
  height: 80px;
  width: 80px;
`

export const SkillLevelWrap = styled(motion.div)`
  width: 80%;
  height: 15px;
  background: ${props => props.theme.background.secondary};
  border-radius: 4px;
  margin: 10px 0 20px 0;
`

export const SkillLevelBar = styled(motion.div)`
  background: ${props => props.theme.colors.accent};
  height: 100%;
  border-radius: 4px;
`

export const SkillLevelValue = styled(motion.p)`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
  padding-top: 2px;
  color: ${props => props.theme.colors.primary};
`