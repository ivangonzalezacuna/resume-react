import React from 'react'
import Header from '../components/Header'
import InitialTransition from '../components/InitialTransition'

const HomePage = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  return (
    <>
      {isFirstMount && <InitialTransition />}
      <Header isFirstMount={isFirstMount}
        fastTransition={fastTransition}
        updateFastTransition={updateFastTransition} />
    </>
  )
}

export default HomePage
