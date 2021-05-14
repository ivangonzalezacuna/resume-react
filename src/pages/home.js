import React from 'react'
import Header from '../components/Header'
import RouteTransition from '../RouteTransition'

const HomePage = ({ fastTransition, updateFastTransition }) => {
  return (
    <>
      <RouteTransition>
        <Header
          fastTransition={fastTransition}
          updateFastTransition={updateFastTransition} />
      </RouteTransition>
    </>
  )
}

export default HomePage
