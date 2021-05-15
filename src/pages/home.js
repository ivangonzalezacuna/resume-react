import React from 'react'
import Header from '../components/Header'
import RouteTransition from '../RouteTransition'

const HomePage = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  return (
    <>
      <RouteTransition>
        <Header
          isFirstMount={isFirstMount}
          fastTransition={fastTransition}
          updateFastTransition={updateFastTransition} />
      </RouteTransition>
    </>
  )
}

export default HomePage
