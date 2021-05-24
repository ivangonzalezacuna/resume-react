import React from 'react'
import { SectionTitle } from '../../atoms/SectionTitle'
import TimelineSection from '../Timeline'
import { education, title } from './animations'
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