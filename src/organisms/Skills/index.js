import React, { useState } from 'react'
import { SectionContainer, SectionWrapper, Tag } from './SkillsElements'
import { SectionTitle } from '../../atoms/SectionTitle'
import { title, container, tag } from './animations'
import SkillModal from '../SkillModal'

const skillItems = [
  {
    name: "React",
    level: 35,
    img: require('../../images/skills/react.svg').default,
  },
  {
    name: "Golang",
    level: 43,
    img: require('../../images/skills/golang.svg').default,
  },
  {
    name: "Javascript",
    level: 79,
    img: require('../../images/skills/javascript.svg').default,
  },
  {
    name: "Linux",
    level: 54,
    img: require('../../images/skills/linux.svg').default,
  },
  {
    name: "Python",
    level: 75,
    img: require('../../images/skills/python.svg').default,
  },
  {
    name: "Git",
    level: 55,
    img: require('../../images/skills/git.svg').default,
  },
  {
    name: "Java",
    level: 55,
    img: require('../../images/skills/java.svg').default,
  },
  {
    name: "Android",
    level: 55,
    img: require('../../images/skills/android.svg').default,
  },
  {
    name: "PostgreSQL",
    level: 55,
    img: require('../../images/skills/postgresql.svg').default,
  },
  {
    name: "NodeJS",
    level: 48,
    img: require('../../images/skills/nodejs.svg').default,
  },
  {
    name: "Docker",
    level: 33,
    img: require('../../images/skills/docker.svg').default,
  },
  {
    name: "CSS",
    level: 77,
    img: require('../../images/skills/css3.svg').default,
  },
  {
    name: "HTML",
    level: 66,
    img: require('../../images/skills/html5.svg').default,
  },
  {
    name: "Swift",
    level: 34,
    img: require('../../images/skills/swift.svg').default,
  },
  {
    name: "Windows",
    level: 66,
    img: require('../../images/skills/windows.svg').default,
  },
  {
    name: "Angular",
    level: 41,
    img: require('../../images/skills/angularjs.svg').default,
  },
  {
    name: "Bash",
    level: 66,
    img: require('../../images/skills/bash.svg').default,
  },
  {
    name: "C",
    level: 66,
    img: require('../../images/skills/c-programming.svg').default,
  },
  {
    name: "MongoDB",
    level: 46,
    img: require('../../images/skills/mongodb.svg').default,
  },
  {
    name: "MySQL",
    level: 77,
    img: require('../../images/skills/mysql.svg').default,
  },
  {
    name: "NPM",
    level: 70,
    img: require('../../images/skills/npm.svg').default,
  },
  {
    name: "Typescript",
    level: 35,
    img: require('../../images/skills/typescript.svg').default,
  },
  {
    name: "Visual Studio",
    level: 85,
    img: require('../../images/skills/visual-studio.svg').default,
  },
  {
    name: "Yarn",
    level: 56,
    img: require('../../images/skills/yarn.svg').default,
  },
].sort((a, b) => a.name.localeCompare(b.name))

const Skill = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <SkillModal
        openModal={openModal}
        toggleModal={toggleModal}
        data={data} />
      <Tag
        onClick={toggleModal}
        variants={tag}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
        {data.name}
      </Tag>
    </>
  )
}

const SkillsSection = () => {
  return (
    <>
      <SectionTitle variants={title} text={"Skills"} />
      <SectionContainer variants={container}>
        <SectionWrapper>
          {skillItems.map((data, index) => (
            <Skill key={index} data={data} />
          ))}
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}

export default SkillsSection
