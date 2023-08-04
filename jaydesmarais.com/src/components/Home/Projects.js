import React from 'react'
import styled from 'styled-components'
import { BsGithub, BsFiletypePdf, BsFileEarmarkZip } from 'react-icons/bs'

const StyledContainer = styled.div`
  padding-top: 20vh;
  height: 65vh;
`

const StyledButton = styled.a`
  border: 2px solid white;
  border-radius: 10px;
  display: inline-flex;
  color: white;
  margin: 1vh 1vw;
  padding: 1vh 2.5vw;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 10px
  }
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
        I'm building my own website! Built using JavaScript and React, I will continue to iterate and improve on it over the next few weeks while I continue to play with and learn more about interactive and fluid web designs!
      </p>
      <StyledButton href='https://github.com/jaydesmarais/jaydesmarais' target='_blank'>
        Source Code &nbsp;
        <BsGithub size={20} />
      </StyledButton>

      <br />
      <h3>
        LiftLog - iOS Programming Project
      </h3>
      <p>
        This project is a fitness and nutrition tracker that focuses on calories burned vs calorie intake. Written in Swift, this project was completed as the final project for a Handheld Programming class in my senior year of college.
      </p>
      <StyledButton href='https://jaydesmarais.s3.us-east-2.amazonaws.com/LiftLog.zip' target='_blank'>
        Project Files &nbsp;
        <BsFileEarmarkZip size={20} />
      </StyledButton>
      <StyledButton href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC436Final.pdf' target='_blank'>
        Final Report &nbsp;
        <BsFiletypePdf size={20} />
      </StyledButton>

      <br />
      <h3>
        Health App - UI/UX Semester Project
      </h3>
      <p>
        This project is a holistic health and wellness app that was focused on UI/UX. Written in JavaScript, this project utilizes React.js as a frontend framework and was completed as the final/semester-long project for my Human-Computer Interaction class in my senior year of college.
      </p>
      <p>
        As a project lead for this project and one of the only members with experience in front-end development, this project taught me a lot about leading a group and how to work around difficulties in experience level and learning style differences as well as differences in work ethic among teammates.
      </p>
      <StyledButton href='https://github.com/jaydesmarais/HealthApp' target='_blank'>
        Source Code &nbsp;
        <BsGithub size={20} />
      </StyledButton>
      <StyledButton href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC434+Midpoint.pdf' target='_blank'>
        Midpoint Report &nbsp;
        <BsFiletypePdf size={20} />
      </StyledButton>
      <StyledButton href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC434+Final.pdf' target='_blank'>
        Final Report &nbsp;
        <BsFiletypePdf size={20} />
      </StyledButton>

    </StyledContainer>
  )
}

export default Projects