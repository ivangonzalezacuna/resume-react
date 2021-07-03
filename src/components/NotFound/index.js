import React from 'react'
import { useTranslation } from 'react-i18next'
import { Logo, LogoWrap, NotFoundAnimation, NotFoundContainer } from './NotFoundElements'
import * as Animation from '../../images/lottie/404.json'
import { LinkButton } from '../../atoms/Button'
import { button, container } from './animations'

const NotFound = () => {
  const [t] = useTranslation('data')
  var data = t('notFound', { returnObjects: true })

  return (
    <>
      <NotFoundContainer
        initial="initial"
        animate="animate"
        variants={container}>
        <LogoWrap>
          <Logo src={data.logo} alt="logo" />
        </LogoWrap>
        <NotFoundAnimation
          loop play
          animationData={Animation.default} />
        <LinkButton to={data.link} variants={button}>
          {data.text}
        </LinkButton>
      </NotFoundContainer>
    </>
  )
}

export default NotFound
