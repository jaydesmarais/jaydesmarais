import React from 'react'
import styled from 'styled-components'
import { socialLinks } from 'config'
import { Section } from 'components/Section'

const StyledSocialIcons = styled.a`
  height: 40px;
border-radius: 10px;
  color: white;
  margin: 1em 1vw;
  padding: 20px;

  &:hover {
    box-shadow:
      0 0 7px #fff,
      0 0 10px #fff;
  }
`

const Footer = () => {
  return (
    <Section className='footer'>
      {/* Linkedin logo svg background gradient */}
      <svg width="0" height="0">
        <linearGradient id="linkedinGrad" y1="100%">
          <stop offset="0%" style={{ stopColor: "#0077B5" }} />
          <stop offset="100%" style={{ stopColor: "#0A66C2" }} />
        </linearGradient>
      </svg>

      {/* Github logo svg background gradient */}
      <svg width="0" height="0">
        <linearGradient id="githubGrad" y1="100%">
          <stop offset="0%" style={{ stopColor: "gray" }} />
          <stop offset="100%" style={{ stopColor: "#2b3137" }} />
        </linearGradient>
      </svg>

      {/* Instagram logo svg background gradient */}
      <svg width="0" height="0">
        <radialGradient id="instagramGrad" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0%" />
          <stop stopColor="#fdf497" offset="5%" />
          <stop stopColor="#fd5949" offset="45%" />
          <stop stopColor="#d6249f" offset="60%" />
          <stop stopColor="#285AEB" offset="90%" />
        </radialGradient>
      </svg>

      {/* Email logo svg background gradient */}
      <svg width="0" height="0">
        <linearGradient id="emailGrad" y1="100%">
          <stop offset="0%" style={{ stopColor: "#5DC3F7" }} />
          <stop offset="100%" style={{ stopColor: "#3770E9" }} />
        </linearGradient>
      </svg>

      {/* Text Message logo svg background gradient */}
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

    </Section >
  )
}

export default Footer