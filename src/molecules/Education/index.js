import React from 'react'
import { SectionTitle } from '../../atoms/SectionTitle'
import TimelineSection from '../Timeline'
import { EducationContainer } from './EducationElements'

const educationItems = [
  {
    date: "Aug 2016 - Jul 2020",
    place: "University of Vigo",
    role: "Degree in Telecommunications",
    description: "Some text as a description"
  },
  {
    date: "Aug 2019 - Dec 2019",
    place: "University of Oulu",
    role: "Software Development",
    description: "Some text as a description"
  }
]

const education = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
}

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const EducationSection = () => {
  return (
    <>
      <SectionTitle variants={title} text={"Education"} />
      <EducationContainer variants={education}>
        <TimelineSection items={educationItems} />
      </EducationContainer>
    </>
  )
}

export default EducationSection