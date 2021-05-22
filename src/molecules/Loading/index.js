import React from 'react'
import { AnimatePresence } from 'framer-motion'
import * as LoadingSpinner from '../../images/lottie/loading-spinner.json'
import { Overlay, Popup, Animation } from './LoadingElements'

const modalVariants = {
  hidden: { opacity: 0, transform: 'translateY(-100%)' },
  visible: {
    opacity: 1, transform: 'translateY(0%)',
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0, transform: 'translateY(-100%)',
    transition: { duration: 0.4 },
  }
}

const Loading = ({ isLoading }) => {
  return (
    <>
      <AnimatePresence>
        {isLoading &&
          <Overlay>
            <Popup
              variants={modalVariants}
              initial='hidden'
              animate='visible'
              exit='exit'>
              <Animation
                loop play
                animationData={LoadingSpinner.default} />
            </Popup>
          </Overlay>
        }
      </AnimatePresence>
    </>
  )
}

export default Loading
