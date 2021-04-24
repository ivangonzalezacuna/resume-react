import React from 'react'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

const SkillsPage = ({ fastTransition }) => {
  return (
    <>
      <Skills fastTransition={fastTransition} />
      <Footer />
    </>
  )
}

export default SkillsPage
