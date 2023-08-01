import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  text-align: left
`

const StyledSubHeader = styled.h3`
  text-align: left
`

const StyledText = styled.p`
  text-align: left
`

const StyledButton = styled.button`
  font-size: small;
  color: white;
  background-color: black;
  border-color: white;
  border-radius: 10px;
  padding: 20px 50px;
`

const Intro = () => {
  return (
    <>
      <StyledHeader>
        Jay Desmarais
      </StyledHeader>
      <StyledSubHeader>
        I design and build things for the web
      </StyledSubHeader>
      <StyledText>
        I{"'"}m a software engineer with a wide range of experience and education in the realms of full-stack programming, algorithms, UI/UX, cybersecurity, and more, which I pull from to design and build solutions to complex problems.
      </StyledText>
      <Link to="/resume">
        <StyledButton>Check out my resume</StyledButton>
      </Link>
    </>
  )
}

export default Intro