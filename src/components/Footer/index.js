import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FooterContainer,
  FooterWrap,
  Logo,
  Copyright,
  LogoImg
} from './FooterElements'
import { RiCopyrightLine } from 'react-icons/ri'
import SocialIcons from '../../atoms/SocialIcons'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, behavior: "smooth"
    })
  }
  const [t] = useTranslation('data')
  var data = t('footer', { returnObjects: true })

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <Logo onClick={scrollToTop}>
            <LogoImg src={data.logo} alt="logo" />
          </Logo>
          <Copyright>
            <RiCopyrightLine style={{ marginRight: '4px' }} />
            {new Date().getFullYear()} {data.text}
          </Copyright>
          <SocialIcons row />
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
