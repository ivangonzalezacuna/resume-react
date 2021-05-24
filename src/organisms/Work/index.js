import React from 'react'
import { SectionTitle } from '../../atoms/SectionTitle'
import TimelineSection from '../Timeline'
import { title, work } from './animations'
import { WorkContainer } from './WorkElements'

const workItems = [
  {
    date: "Feb 2020 - Present",
    place: "University of Vigo",
    role: "Research and Development",
    description: "Some text as a description"
  },
  {
    date: "Jun 2019 - Jul 2019",
    place: "Muutech Monitoring Solutions SL",
    role: "Internship",
    description: "Some text as a description"
  }
]

const WorkSection = () => {
  return (
    <>
      <SectionTitle variants={title} text={"Work Experience"} />
      <WorkContainer variants={work}>
        <TimelineSection items={workItems} />
      </WorkContainer>
    </>
  )
}

export default WorkSection
