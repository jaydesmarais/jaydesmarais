import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'components/Buttons'
import { BsGithub, BsFiletypePdf, BsFileEarmarkZip, BsFillBugFill } from 'react-icons/bs'
import { SectionHeader, SectionSubHeader, SectionText } from 'components/Section'

const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const ProjectDescription = styled.div`
  padding-top: 10vh;
  height: 100vh;
  width: 50vh;
`

const ProjectGraphics = styled.div`

`

// Personal projects section for home page
const Projects = () => {
  return (
    <>
      <SectionHeader>Projects</SectionHeader>
      <ProjectDescription>
        <SectionSubHeader>
          JayDesmarais.com
        </SectionSubHeader>
        <SectionSubHeader>
          My Personal Website!
        </SectionSubHeader>
        <SectionText>
          I'm building my own website! To do so, I am using <strong>JavaScript</strong>, <strong>React</strong>, and <strong>CSS</strong> through styled-components. I will continue to iterate and improve on it over the next few weeks while I continue to play with and learn more about interactive and fluid web designs!
        </SectionText>
        <SectionText className='logo'>
          <BsFillBugFill size='40' color='lightgreen' style={{ paddingRight: '20px' }} />
          As mentioned above, this site is still in progress, so feel free to send me any recommendations or feedback using the contact form below, and please, don't mind my bugs!
        </SectionText>
        <StyledButtonGroup>
          <ExternalLink href='https://github.com/jaydesmarais/jaydesmarais' target='_blank'>
            Source Code &nbsp;
            <BsGithub size={20} />
          </ExternalLink>
        </StyledButtonGroup>
      </ProjectDescription>
      <ProjectGraphics>

      </ProjectGraphics>

      <ProjectDescription>
        <SectionSubHeader>
          LiftLog - iOS Programming Project
        </SectionSubHeader>
        <SectionText>
          This project is a fitness and nutrition tracker that focuses on calories burned vs calorie intake. Written in <strong>Swift</strong>, this project was completed as the final project for a Handheld Programming class in my senior year of college.
        </SectionText>
        <StyledButtonGroup>
          <ExternalLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/LiftLog.zip' target='_blank'>
            Project Files &nbsp;
            <BsFileEarmarkZip size={20} />
          </ExternalLink>
          <ExternalLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC436Final.pdf' target='_blank'>
            Final Report &nbsp;
            <BsFiletypePdf size={20} />
          </ExternalLink>
        </StyledButtonGroup>
      </ProjectDescription>
      <ProjectGraphics>

      </ProjectGraphics>

      <ProjectDescription>
        <SectionSubHeader>
          Health App - UI/UX Semester Project
        </SectionSubHeader>
        <SectionText>
          This project is a holistic health and wellness app that was focused on <strong>UI/UX</strong>. Written in <strong>JavaScript</strong>, this project utilizes <strong>React</strong> as a frontend framework and was completed as the final/semester-long project for my Human-Computer Interaction class in my senior year of college.
        </SectionText>
        <SectionText>
          As a project lead for this project and one of the only members with experience in front-end development, this project provided me with insights into effective leadership within a team context, while also imparting lessons in navigating challenges arising from variations in experience levels, learning preferences, and work ethic among team members.
        </SectionText>
        <StyledButtonGroup>
          <ExternalLink href='https://github.com/jaydesmarais/HealthApp' target='_blank'>
            Source Code &nbsp;
            <BsGithub size={20} />
          </ExternalLink>
          <ExternalLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC434+Midpoint.pdf' target='_blank'>
            Midpoint Report &nbsp;
            <BsFiletypePdf size={20} />
          </ExternalLink>
          <ExternalLink href='https://jaydesmarais.s3.us-east-2.amazonaws.com/CMSC434+Final.pdf' target='_blank'>
            Final Report &nbsp;
            <BsFiletypePdf size={20} />
          </ExternalLink>
        </StyledButtonGroup>
      </ProjectDescription>
      <ProjectGraphics>

      </ProjectGraphics>
    </>
  )
}

export default Projects