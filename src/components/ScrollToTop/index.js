import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { GoTopWrapper, GoTopIcon } from './ScrollToTopElements'

const ScrollToTop = () => {
  const [goTop, setGoTop] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= window.innerHeight * 0.80) {
      setGoTop(true)
    } else {
      setGoTop(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  }, [])

  const scrollTop = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      {goTop &&
        <GoTopWrapper to='/' onClick={scrollTop}>
          <GoTopIcon />
        </GoTopWrapper>
      }
    </>
  )
}

export default ScrollToTop
