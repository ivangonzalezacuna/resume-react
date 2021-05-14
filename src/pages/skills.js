import React from 'react'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import RouteTransition from '../RouteTransition'

const SkillsPage = ({ fastTransition }) => {
  return (
    <>
      <RouteTransition>
        <Skills fastTransition={fastTransition} />
        <Footer />
      </RouteTransition>
    </>
  )
}

export default SkillsPage
