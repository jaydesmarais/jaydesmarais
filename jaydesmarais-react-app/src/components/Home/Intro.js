import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  text-align: center
`

const StyledSubHeader = styled.p`
  text-align: center
`

const Intro = () => {
  return (
    <>
      <StyledHeader>
        Jay Desmarais
      </StyledHeader>
      <StyledSubHeader>
        I'm currently building my new website, but feel free to check out my current (very boring) site.
      </StyledSubHeader>
      <StyledSubHeader>
        <a href="https://jaydesmarais.carrd.co">
          jaydesmarais.carrd.co
        </a>
      </StyledSubHeader>
    </>
  )
}

export default Intro