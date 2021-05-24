import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TimelineWrapper = styled.div`
  padding: 0 50px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 0 25px;
  }
`

export const TimelineContainer = styled.div`
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

export const Item = styled.div`
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

export const Time = styled.div`
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

export const Content = styled.div`
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

export const Title = styled(motion.h1)`
  font-size: clamp(1.2rem, 5vw, 1.4rem);
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.accent};
`

export const Subtitle = styled(motion.h2)`
  font-size: clamp(1rem, 4vw, 1.1rem);
  margin-bottom: 15px;
  font-weight: 400;
  color: #f9f9f9dd;
`

export const Description = styled(motion.p)`
  font-size: clamp(0.8rem, 3vw, 0.9rem);
  margin-bottom: 15px;
  color: #f9f9f9bb;
`