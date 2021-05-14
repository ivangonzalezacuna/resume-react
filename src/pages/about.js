import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import RouteTransition from '../RouteTransition'

const AboutPage = () => {
  return (
    <>
      <RouteTransition>
        <About />
        <Footer />
      </RouteTransition>
    </>
  )
}

export default AboutPage
