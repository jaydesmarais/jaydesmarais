import React from 'react'
import styled from 'styled-components'
import { PrimaryLink } from 'components/Buttons'
import { BsGithub, BsFiletypePdf, BsFileEarmarkZip } from 'react-icons/bs'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 7vh;
  padding-bottom: 3vh;
`

const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const Projects = () => {
  return (
    <StyledContainer id="projects">
      <h1>Projects</h1>
      <br />
      <h3>
        jaydesmarais.com - My Personal Website!
      </h3>
      <p>
        I'm building my own website! To do so, I am using <strong>JavaScript</strong>, <strong>React</strong>, and <strong>CSS</strong> through styled-components. I will continue to iterate and improve on it over the next few weeks while I continue to play with and learn more about interactive and fluid web designs!
      </p>
      <StyledButtonGroup>
        <PrimaryLink href='https://github.com/jaydesmarais/jaydesmarais' target='_blank'>
          Source Code &nbsp;
          <BsGithub size={20} />
        </PrimaryLink>
      </StyledButtonGroup>

      <br />
      <h3>
        LiftLog - iOS Programming Project
      </h3>
      <p>
        This project is a fitness and nutrition tracker that focuses on calories burned vs calorie intake. Written in <strong>Swift</strong>, this project was completed as the final project for a Handheld Programming class in my senior year of college.
      </p>
      <StyledButtonGroup>
        <PrimaryLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/LiftLog.zip' target='_blank'>
          Project Files &nbsp;
          <BsFileEarmarkZip size={20} />
        </PrimaryLink>
        <PrimaryLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC436Final.pdf' target='_blank'>
          Final Report &nbsp;
          <BsFiletypePdf size={20} />
        </PrimaryLink>
      </StyledButtonGroup>

      <br />
      <h3>
        Health App - UI/UX Semester Project
      </h3>
      <p>
        This project is a holistic health and wellness app that was focused on <strong>UI/UX</strong>. Written in <strong>JavaScript</strong>, this project utilizes <strong>React</strong> as a frontend framework and was completed as the final/semester-long project for my Human-Computer Interaction class in my senior year of college.
      </p>
      <p>
        As a project lead for this project and one of the only members with experience in front-end development, this project taught me a lot about leading a group and how to work around difficulties in experience level and learning style differences as well as differences in work ethic among teammates.
      </p>
      <StyledButtonGroup>
        <PrimaryLink href='https://github.com/jaydesmarais/HealthApp' target='_blank'>
          Source Code &nbsp;
          <BsGithub size={20} />
        </PrimaryLink>
        <PrimaryLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC434+Midpoint.pdf' target='_blank'>
          Midpoint Report &nbsp;
          <BsFiletypePdf size={20} />
        </PrimaryLink>
        <PrimaryLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC434+Final.pdf' target='_blank'>
          Final Report &nbsp;
          <BsFiletypePdf size={20} />
        </PrimaryLink>
      </StyledButtonGroup>

    </StyledContainer>
  )
}

export default Projects