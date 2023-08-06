import React from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsGithub, BsInstagram, BsFillEnvelopeFill, BsFillChatFill } from 'react-icons/bs'

const StyledContainer = styled.div`
  height: 20vh;
  text-align: center;
`

const StyledSocialIcons = styled.a`
  display: inline-block;
  color: white;
  margin: 1vh 1vw;
  padding: 1vh 2.5vw;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 10px
  }
`

const socialLinks = [
  { name: 'github', link: 'https://github.com/jaydesmarais', icon: <BsGithub size={50} /> },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/jaydesmarais/', icon: <BsLinkedin size={50} /> },
  { name: 'instagram', link: 'https://www.instagram.com/jaydesmarais/', icon: <BsInstagram size={50} /> },
  { name: 'email', link: 'mailto:jmdesmarais01@gmail.com', icon: <BsFillEnvelopeFill size={50} /> },
  { name: 'text', link: 'sms:4437454624', icon: <BsFillChatFill size={50} /> }
]

const Footer = () => {
  return (
    <StyledContainer id="experience">
      <h1>Thanks for visiting!</h1>

      {socialLinks.map(({ name, link, icon }, i) => {
        return (
          <StyledSocialIcons href={link} key={name} target="_blank">
            {icon}
          </StyledSocialIcons>
        )
      })}

    </StyledContainer>
  )
}

export default Footer