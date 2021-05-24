import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa'
import { Icon, IconContainer } from './SocialIconsElements'

const data = [
  {
    name: "linkedin",
    link: "http://www.linkedin.com",
  },
  {
    name: "github",
    link: "http://www.github.com",
  },
  {
    name: "skype",
    link: "http://www.skype.com",
  },
  {
    name: "facebook",
    link: "http://www.facebook.com",
  },
  {
    name: "instagram",
    link: "http://www.instagram.com",
  }
]

const SocialIcons = props => {
  return (
    <>
      <IconContainer row={props.row}>
        {data.map((icon, index) => (
          <Icon
            key={index}
            row={props.row}
            header={props.header}
            href={icon.link}
            target="_blank"
            variants={props.variants}
            animate={{ opacity: 1 }}
            whileHover={{ opacity: 0.85, scale: 1.05 }}>
            {icon.name === 'linkedin' && <FaLinkedinIn />}
            {icon.name === 'github' && <FaGithub />}
            {icon.name === 'skype' && <FaSkype />}
            {icon.name === 'facebook' && <FaFacebookF />}
            {icon.name === 'instagram' && <FaInstagram />}
          </Icon>
        ))}
      </IconContainer>
    </>
  )
}

export default SocialIcons
