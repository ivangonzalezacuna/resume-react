import React from 'react'
import { Logo, LogoWrap, NotFoundAnimation, NotFoundContainer } from './NotFoundElements'
import * as Animation from '../../images/lottie/404.json'
import { LinkButton } from '../../molecules/Button'
import IvanLogo from '../../images/background/logo.svg'

const btnItem = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const variants = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0
    },
  },
}

const NotFound = () => {
  return (
    <>
      <NotFoundContainer
        initial="initial"
        animate="animate"
        variants={variants}>
        <LogoWrap>
          <Logo src={IvanLogo} alt="logo" />
        </LogoWrap>
        <NotFoundAnimation
          loop play
          animationData={Animation.default} />
        <LinkButton
          to="/"
          variants={btnItem}
          text={"Go to Main Page"} />
      </NotFoundContainer>
    </>
  )
}

export default NotFound
