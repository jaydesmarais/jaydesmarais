import React from 'react'
import styled, { keyframes } from 'styled-components'
import PrimaryLink from 'components/Buttons'
import { BsGithub, BsFiletypePdf } from 'react-icons/bs'
import { PrimaryRouteLink } from 'components/Buttons'
import Headshot from 'images/headshot.png'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 0;
  width: 100%;
  min-height: 75vh;
`

const StyledIntro = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  @media (max-width: 1080px){
    display: block;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

const StyledHeader = styled.h1`
  margin-top: 0;
  font-size: 400%;
  text-align: left;

  @media (max-width: 720px) {
    font-size: 300%;
  }
`

const StyledSubHeader = styled.h3`
  margin-bottom: 1vh;
  text-align: left;
`

const StyledText = styled.p`
  text-align: left;
`

const StyledImageContainer = styled.div`
  display: inline-block;
  position: relative;

  &:before {
    position: absolute;
    top: 5%;
    left: calc(15% - 4px);
    width: 80%;
    height: 100%;
    border: 2px solid white;
    border-radius: 10px;
    content: '';

    @media (max-width: 1080px) {
      display:  none;
    }
  }

  &:after {
    display:  none;

    @media (max-width: 1080px) {
      display: inline-block;
      position: absolute;
      top: 5%;
      left: 5%;
      width: calc(90% - 8px);
      height: calc(90% - 2em);
      border: 2px solid white;
      border-radius: 10px;
      margin: 1em 0;
      content: '';
    }
  }
`

const StyledImage = styled.img`
  border-radius: 10px;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: auto;
  filter: grayscale(100%);
  width: calc(80% - 4px);
  margin: 0 10%;

  @media (max-width: 1080px){
    width: calc(100% - 4px);
    margin: 1em 0;
  }
    
  @media (max-width: 720px){
    display: block;
  }
`

const StyledWarning = styled.div`
  margin-top: 10vh;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(50,50,50,.9);

  @media (max-width: 1080px){
    margin: 1em auto;
  }
`

const scrollAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate(-10px, -10px) }
`

const StyledScrollArrow = styled.div`
  position: relative;
  margin: auto;
  top: 10vh;
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

  @media (max-width: 1080px){
    top: 2vh;
  }
`

const Intro = () => {
  return (
    <StyledContainer id="intro">
      <StyledIntro>
        <StyledContent>
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
        </StyledContent>
        <StyledContent className='image'>
          <StyledImageContainer>
            <StyledImage src={Headshot} alt='headshot' />
          </StyledImageContainer>
        </StyledContent>


      </StyledIntro>

      <StyledWarning>
        <h2>
          🚧 I'm still constructing this website! 🚧
        </h2>
        <p>
          Check back for occasional updates and improvements or view my progress on github!
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