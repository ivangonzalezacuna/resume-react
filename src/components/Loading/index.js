import React from 'react'
import * as Loader from '../../images/lottie/loader.json'
import { LoadingAnimation, LoadingContainer } from './LoadingElements'

const Loading = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Loader.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  }

  return (
    <>
      <LoadingContainer>
        <LoadingAnimation
          options={defaultOptions}
          height='50vh'
        />
      </LoadingContainer>
    </>
  )
}

export default Loading
