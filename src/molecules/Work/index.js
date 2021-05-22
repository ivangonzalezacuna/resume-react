import React from 'react'
import { SectionTitle } from '../../atoms/SectionTitle'
import TimelineSection from '../Timeline'
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

const work = {
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
