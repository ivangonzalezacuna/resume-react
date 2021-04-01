import React from 'react'
import { LoadingAnimation, LoadingContainer } from './LoadingElements'
import * as Loader from '../../images/loader.json'

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
