import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'components/Buttons'
import { BsGithub, BsFillBugFill } from 'react-icons/bs'
import { SectionHeader, SectionSubHeader, SectionText, StickyContainer } from 'components/Section'
import healthAppImages from 'images/healthApp/photos.js'
import liftLogImages from 'images/liftLog/photos.js'
import siteImages from 'images/site/photos.js'
import { Parallax } from 'react-scroll-parallax'

const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  
  a {
    margin-top: 30px;
  }
`

const ProjectTitle = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  z-index: 10;
`

const ProjectSection = styled.div`
  min-height: 150vh;
`

const ProjectDescription = styled.div`
  position: absolute;
  padding-top: 30vh;
  min-height: 100vh;
  width: 45%;
  margin-left: 2.5%;
`

const ProjectGraphics = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 50%;
  height: 100%;

  &.internal {
    width: 100%;
    position: relative;
  }
`

const StyledParallax = styled(Parallax)`
  width: 50%;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
`

const Gradient = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  z-index: 8;
  pointer-events: none; 

  &.top {
    background: linear-gradient(black, 50%, transparent);
    height: 30vh;
  }

  &.bottom {
    top: 70vh;
    height: 30vh;
    background: linear-gradient(transparent, 50%, black);
  }
`

// Personal projects section for home page
const Projects = () => {
  return (
    <>
      <Overlay>
        <StickyContainer>
          <Gradient className='top' />
          <Gradient className='bottom' />
        </StickyContainer>
      </Overlay>
      <ProjectTitle>
        <StickyContainer>
          <SectionHeader className='projects'>Projects</SectionHeader>
        </StickyContainer>
      </ProjectTitle>
      <ProjectSection>
        <StickyContainer>
          <ProjectDescription>
            <SectionSubHeader>
              JayDesmarais.com
            </SectionSubHeader>
            <SectionSubHeader>
              My Personal Website!
            </SectionSubHeader>
            <SectionText>
              I built my own website! I will continue to iterate and improve on it while I continue to play with and learn more about interactive and fluid web designs!
            </SectionText>
            <SectionText className='logo'>
              <BsFillBugFill size='40' color='lightgreen' style={{ paddingRight: '20px' }} />
              This site is still in progress, so please don't mind any bugs (but feel free to send me any ideas or pointers)! *Not yet optimized for mobile.<br />
            </SectionText>
            <h3>
              #React #JavaScript #HTML/CSS
            </h3>
            <StyledButtonGroup>
              <ExternalLink href='https://github.com/jaydesmarais/jaydesmarais' target='_blank'>
                View on GitHub &nbsp;
                <BsGithub size={20} />
              </ExternalLink>
            </StyledButtonGroup>
          </ProjectDescription>
          <ProjectGraphics>
            <Gradient className='top internal' />
            <Gradient className='bottom' />
            {siteImages.map((img) => {
              return (
                <img style={{ width: '100%' }} src={img} alt={img} />
              )
            })}
          </ProjectGraphics>
        </StickyContainer>
      </ProjectSection>
      <ProjectSection>
        <StickyContainer className='internal'>
          <ProjectDescription>
            <SectionSubHeader>
              Health App - UI/UX Semester Project
            </SectionSubHeader>
            <SectionText>
              This project is a functional prototype of a holistic health and wellness app that was focused on <strong>UI/UX</strong>. It was completed as the final project for my Human-Computer Interaction class in my senior year of college.
            </SectionText>
            <SectionText>
              As the project lead for this project, I quickly learned how to manage variations in experience levels, learning preferences, and work ethic among team members.
            </SectionText>
            <h3>
              #UI/UX #React #JavaScript #SemanticUI
            </h3>
            <StyledButtonGroup>
              <ExternalLink href='https://github.com/jaydesmarais/HealthApp' target='_blank'>
                View on GitHub &nbsp;
                <BsGithub size={20} />
              </ExternalLink>
            </StyledButtonGroup>
          </ProjectDescription>
          <ProjectGraphics>
            <Gradient className='bottom internal' />
            <Gradient className='top internal' />
            <StyledParallax translateY={[0, -150]}>
              <ProjectGraphics className='internal'>
                {healthAppImages.sort(() => Math.random() - 0.5).map((img) => {
                  return (
                    <img style={{ width: '100%' }} src={img} alt={img} />
                  )
                })}
              </ProjectGraphics>
            </StyledParallax>
            <StyledParallax translateY={[-300, 200]}>
              <ProjectGraphics className='internal'>
                {healthAppImages.sort(() => Math.random() - 0.5).map((img) => {
                  return (
                    <img style={{ width: '100%' }} src={img} alt={img} />
                  )
                })}
              </ProjectGraphics>
            </StyledParallax>
          </ProjectGraphics>
        </StickyContainer>
      </ProjectSection >
      <ProjectSection>
        <StickyContainer className='internal'>
          <ProjectDescription>
            <SectionSubHeader>
              LiftLog - iOS Programming Project
            </SectionSubHeader>
            <SectionText>
              This project is a fitness and nutrition tracker that focuses on calories burned vs calorie intake. I completed it as the final project for my Handheld Programming class in my senior year of college.
            </SectionText>
            <h3>
              #Swift #XCode #Firebase
            </h3>
            <StyledButtonGroup>
              <ExternalLink href='https://github.com/jaydesmarais/iOS-Lift-Log' target='_blank'>
                View on GitHub &nbsp;
                <BsGithub size={20} />
              </ExternalLink>
            </StyledButtonGroup>
          </ProjectDescription>
          <ProjectGraphics>
            <Gradient className='top' />
            <Gradient className='bottom' />
            <StyledParallax translateY={[0, -150]}>
              <ProjectGraphics className='internal'>
                {liftLogImages.sort(() => Math.random() - 0.5).map((img) => {
                  return (
                    <img style={{ width: '100%' }} src={img} alt={img} />
                  )
                })}
              </ProjectGraphics>
            </StyledParallax>
            <StyledParallax translateY={[-300, 200]}>
              <ProjectGraphics className='internal'>
                {liftLogImages.sort(() => Math.random() - 0.5).map((img) => {
                  return (
                    <img style={{ width: '100%' }} src={img} alt={img} />
                  )
                })}
              </ProjectGraphics>
            </StyledParallax>
          </ProjectGraphics>
        </StickyContainer>
      </ProjectSection>

    </>
  )
}

export default Projects