import React from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsGithub, BsInstagram, BsFillEnvelopeFill, BsFillChatFill } from 'react-icons/bs'

const StyledContainer = styled.div`
  min-height: 20vh;
  text-align: center;
`

const StyledSocialIcons = styled.a`
  display: inline-block;
  color: white;
  margin: 1em 1vw;
  padding: 1em 2vw;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 10px
  }
`

const socialLinks = [
  {
    name: 'linkedin', link: 'https://www.linkedin.com/in/jaydesmarais/', icon: <BsLinkedin size={40} fill='url(#linkedinGrad)' />
  },
  {
    name: 'github', link: 'https://github.com/jaydesmarais', icon: <BsGithub size={40} fill='url(#githubGrad)' />
  },
  {
    name: 'instagram', link: 'https://www.instagram.com/jaydesmarais/', icon: <BsInstagram size={40} fill='url(#instagramGrad)' />
  },
  {
    name: 'email', link: 'mailto:jmdesmarais01@gmail.com', icon: <BsFillEnvelopeFill size={40} fill="url(#emailGrad)" />
  },
  {
    name: 'text', link: 'sms:4437454624', icon: <BsFillChatFill size={40} fill="url(#textGrad)" />
  }
]

const Footer = () => {
  return (
    <StyledContainer>

      <svg width="0" height="0">
        <linearGradient id="linkedinGrad" y1="100%">
          <stop offset="0%" style={{ stopColor: "#0077B5" }} />
          <stop offset="100%" style={{ stopColor: "#0A66C2" }} />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient id="githubGrad" y1="100%">
          <stop offset="0%" style={{ stopColor: "gray" }} />
          <stop offset="100%" style={{ stopColor: "#2b3137" }} />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <radialGradient id="instagramGrad" r="150%" cx="30%" cy="107%">
          <stop stop-color="#fdf497" offset="0%" />
          <stop stop-color="#fdf497" offset="5%" />
          <stop stop-color="#fd5949" offset="45%" />
          <stop stop-color="#d6249f" offset="60%" />
          <stop stop-color="#285AEB" offset="90%" />
        </radialGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient id="emailGrad" y1="100%">
          <stop offset="0%" style={{ stopColor: "#5DC3F7" }} />
          <stop offset="100%" style={{ stopColor: "#3770E9" }} />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient id="textGrad" y1="100%">
          <stop offset="0%" style={{ stopColor: "#8AF485" }} />
          <stop offset="100%" style={{ stopColor: "#5AC04A" }} />
        </linearGradient>
      </svg>

      {
        socialLinks.map(({ name, link, icon }, i) => {
          return (
            <StyledSocialIcons href={link} key={name} target="_blank">
              {icon}
            </StyledSocialIcons>
          )
        })
      }

      <h2>Thanks for stopping by!</h2>

    </StyledContainer >
  )
}

export default Footer