import React from 'react'
import styled, { keyframes } from 'styled-components'
import PrimaryLink from 'components/Buttons'
import { BsGithub, BsFiletypePdf } from 'react-icons/bs'
import { PrimaryRouteLink } from 'components/Buttons'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 0;
  width: 100%;
  min-height: 75vh;
`

const StyledHeader = styled.h1`
  font-size: 400%;
  text-align: left;

  @media (max-width: 720px) {
    font-size: 300%;
  }
`

const StyledSubHeader = styled.h3`
  text-align: left;
`

const StyledText = styled.p`
  text-align: left;
`

const StyledWarning = styled.div`
  margin-top: 10vh;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(50,50,50,.9);
`

const scrollAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate(-10px, -10px) }
`

const StyledScrollArrow = styled.div`
  position: relative;
  left: 50%;
  bottom: -10vh;
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
        Jay Desmarais
      </StyledHeader>
      <StyledSubHeader>
        I design and build things for the web
      </StyledSubHeader>
      <StyledText>
        I{"'"}m a software engineer with a wide range of experience and education in the realms of full-stack programming, algorithms, UI/UX, cybersecurity, and more, which I pull from to design and build solutions to complex problems.
      </StyledText>
      <PrimaryRouteLink to="/resume" style={{ textDecoration: 'none' }}>
        Check out my Resume &nbsp;
        <BsFiletypePdf size={20} />
      </PrimaryRouteLink>

      <StyledWarning>
        <h2>
          I{"'"}m still building and adding to this website!
        </h2>
        <p>
          Check back for occasional updates and improvements or check the progress on github!
        </p>
        <PrimaryLink href='https://github.com/jaydesmarais/jaydesmarais' target='_blank'>
          Source Code &nbsp;
          <BsGithub size={20} />
        </PrimaryLink>
      </StyledWarning>

      <StyledScrollArrow />

    </StyledContainer >
  )
}

export default Intro