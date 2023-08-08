import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  padding: 10vh 0;
  min-height: 65vh;
`

const StyledHeader = styled.h1`
  text-align: left
`

const StyledSubHeader = styled.h3`
  text-align: left
`

const StyledText = styled.p`
  text-align: left
`

const StyledWarning = styled.p`
  margin-top: 10vh;
  padding: 1vh;
  text-align: center;
  border-radius: 100px;
  background-color: rgba(255,255,255,.15);
`

const scrollAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate(-10px, -10px) }
`

const StyledButton = styled.button`
  font-size: small;
  color: white;
  background-color: black;
  border-color: white;
  border-radius: 10px;
  padding: 20px 50px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
    border-color: black;
  }
`

const StyledScrollArrow = styled.div`
  position: relative;
  left: 50%;
  top: 20vh;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 2px #fff solid;
  border-bottom: 2px #fff solid;

  &:before {
    position: absolute;
    left: 50%;
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: ${scrollAnimation};
  }
`

const Intro = () => {
  return (
    <StyledContainer id="intro">
      <StyledHeader>
        <h1>
          Jay Desmarais
        </h1>
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

      <StyledWarning>
        <h2>
          I{"'"}m still building and adding to this website!
        </h2>
        <p>
          Check back for occasional updates and improvements!
        </p>
      </StyledWarning>

      <StyledScrollArrow />

    </StyledContainer>
  )
}

export default Intro