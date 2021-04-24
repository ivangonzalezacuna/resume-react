import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = ({ fastTransition }) => {
  return (
    <>
      <About fastTransition={fastTransition} />
      <Footer />
    </>
  )
}

export default AboutPage
