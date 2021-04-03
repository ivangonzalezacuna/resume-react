import React from 'react'
import * as NotFoundImg from '../../images/lottie/404.json'
import {
  NotFoundAnimation,
  NotFoundBtn,
  NotFoundBtnWrap,
  NotFoundContainer,
  NotFoundText
} from './NotFoundElements'

const NotFound = ({ t }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    autoSize: true,
    animationData: NotFoundImg.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    },
    initialSegment: [0, 175],
  }

  return (
    <>
      <NotFoundContainer>
        <NotFoundAnimation options={defaultOptions}
          height='50vh'
        />
        <NotFoundText>{t.message}</NotFoundText>
        <NotFoundBtnWrap>
          <NotFoundBtn to='/'
            onClick={() => { window.location.href = "/" }}
          >{t.button}</NotFoundBtn>
        </NotFoundBtnWrap>
      </NotFoundContainer>
    </>
  )
}

export default NotFound
