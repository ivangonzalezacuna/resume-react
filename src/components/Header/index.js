import React from 'react'
import Fade from 'react-reveal/Fade'
import HeaderBg from '../../images/header.jpg'
import { Button } from '../ButtonElement'
import {
  HeaderSection,
  HeaderWrapper,
  HeaderContent,
  HeaderImage,
  HeaderContainer,
  HeaderName,
  HeaderDescription
} from './HeaderElements'

const Header = ({ openModal, header }) => {
  return (
    <HeaderSection>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderImage src={HeaderBg} alt='header' />
          <HeaderContent>
            <Fade right duration={1500}>
              <HeaderName>{header.name}</HeaderName>
            </Fade>
            <Fade left duration={2000}>
              <HeaderDescription>{header.description}</HeaderDescription>
            </Fade>
            <Fade bottom duration={1000} delay={1000}>
              <Button onClick={openModal}>
                {header.contactButton}
              </Button>
            </Fade>
          </HeaderContent>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderSection>
  )
}

export default Header
