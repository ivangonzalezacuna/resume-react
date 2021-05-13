import React from 'react'
import {
  InitialTransitionContainer,
  InitialTransitionText,
  Logo
} from './InititalTransitionElements'
import IvanLogo from '../../images/background/logo.svg'

const blackBox = {
  initial: { height: '100vh' },
  animate: {
    height: 0,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const InitialTransition = () => {
  return (
    <InitialTransitionContainer
      initial="initial"
      animate="animate"
      variants={blackBox}>
      <InitialTransitionText variants={textContainer}>
        <Logo src={IvanLogo} alt="logo" />
      </InitialTransitionText>
    </InitialTransitionContainer>
  )
}

export default InitialTransition