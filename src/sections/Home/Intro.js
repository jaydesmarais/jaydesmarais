import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BsGithub, BsFiletypePdf } from 'react-icons/bs'
import { PrimaryRouteLink } from 'components/Buttons'
import Headshot from 'images/headshot.png'
import { Section, SectionContainer, SectionHeader, SectionSubHeader, SectionText } from 'components/Section'
import { Parallax } from 'react-scroll-parallax'
import { Warning, WarningText } from 'components/Warning'

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

const StyledImageContainer = styled.div`
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

const scrollAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate(-10px, -10px) }
`

const StyledScrollArrow = styled.div`
  position: relative;
  margin: 0 auto 40px;
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

// Intro section for home page
const Intro = () => {
  return (
    <Section className='intro'>
      <SectionContainer>
        <StyledIntro>
          <StyledContent>
            <SectionHeader className='intro'>
              Jay Desmarais
            </SectionHeader>
            <SectionSubHeader>
              I design and build things for the web
            </SectionSubHeader>
            <SectionText>
              I{"'"}m a software engineer with a wide range of experience and education in the realms of full-stack programming, algorithms, UI/UX, cybersecurity, and more, which I pull from to design and build solutions to complex problems.
            </SectionText>
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
      </SectionContainer>

      <Parallax translateY={[-3, 3]} translateX={[-5, 5]}>
        <Warning className='left'>
          <WarningText>
            {[...Array(5)].map((e, i) => <div>Site Under Construction</div>)}
          </WarningText>
        </Warning>
      </Parallax>

      <Parallax translateY={[-50, -10]} translateX={[10, -5]}>
        <Warning className='right'>
          <WarningText>
            {[...Array(5)].map((e, i) => <div style={{ display: 'flex', alignItems: 'center' }}>Updates weekly &nbsp;
              <BsGithub size={20} /></div>)}

          </WarningText>
        </Warning>
      </Parallax>

      <SectionContainer>
        <StyledScrollArrow />
      </SectionContainer>

    </Section >
  )
}

export default Intro