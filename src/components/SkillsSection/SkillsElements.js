import styled from 'styled-components'
import { final } from '../../data/palette'
import { FiInfo, FiXCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

export const SkillsContainer = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${final.background};
  cursor: default;
`

export const TopLineWrap = styled.div`
  display: flex;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 50px 0px 50px;
  justify-content: start;
`

export const TopLine = styled(motion.p)`
  color: ${final.foreground_light1};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const SkillsWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  align-items: center;
  grid-gap: 24px;
  padding: 100px 24px;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const SkillCard = styled.div`
  background: ${final.background_light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 320px;
  max-height: 320px;
  padding: 20px;
  box-shadow: 0 1px 3px ${final.foreground_light1_op05};
`

export const ShowBackCard = styled(FiInfo)`
  position: fixed;
  top: 0.6rem;
  right: 0.6rem;
  color: ${({ invisible }) => (invisible === 'true') ?
    final.background_light : final.background};
  font-size: 32px;
  padding: 5px;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`

export const CloseBackCard = styled(FiXCircle)`
  position: fixed;
  top: 0.6rem;
  right: 0.6rem;
  color: ${({ invisible }) => (invisible === 'true') ?
    final.background_light : final.background};
  font-size: 32px;
  padding: 5px;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`

export const FrontImg = styled.img`
  height: 140px;
  width: 140px;
  margin-bottom: 20px;
`

export const BackImg = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 40px;
`

export const SkillH2 = styled.h2`
  font-size: 1rem;
`

export const SkillP = styled.p`
  font-size: 0.9rem;
  text-align: center;
`

export const SkillBarWrap = styled.div`
  margin: 20px 0;
  padding: 0;
  height: 20px;
  border-radius: 4px;
  width: 100%;
  background-color: ${final.background};
`

export const SkillBar = styled.div`
  position: relative;
  height: 100%;
  width: ${({ skillValue }) => (skillValue ? skillValue : '0%')};
  border-radius: 4px;
  text-align: left;
  background: ${final.foreground_light2};
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.1),
                    0px 1px rgba(255, 255, 255, 0.8);


`
/*${ServicesCard}:hover & {
  transform-origin: left;
  animation: ${animate} 1s cubic-bezier(.13,1.2,1,.99) forwards;
}*/

export const SkillValue = styled.p`
  height: 100%;
  color: ${final.background};
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  margin-left: 8px;
  top: 3px;
`
