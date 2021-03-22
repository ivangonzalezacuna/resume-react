import styled, { keyframes } from 'styled-components'
import { final } from '../../data/palette'

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

export const TopLine = styled.p`
  color: ${final.foreground_light1};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const ServicesWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  align-items: center;
  grid-gap: 16px;
  padding: 100px 50px;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const ServicesCard = styled.div`
    background: ${final.background_light};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 140px;
    width: 140px;
    margin-bottom: 10px;
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ServiceBar = styled.div`
  margin: 20px 0;
  padding: 0;
  height: 20px;
  border-radius: 4px;
  width: 100%;
  background: ${final.background};
`

const animate = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

const animate2 = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
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

  ${ServicesCard}:hover & {
    transform-origin: left;
    animation: ${animate} 1s cubic-bezier(.13,1.2,1,.99) forwards;
  }
`

export const SkillValue = styled.p`
  height: 100%;
  color: ${final.background};
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  margin-left: 8px;
  top: 3px;

  ${ServicesCard}:hover & {
    transform-origin: left;
    animation: ${animate2} 1s ease-in-out;
  }
`
