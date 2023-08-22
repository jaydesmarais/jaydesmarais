import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { SiAtandt, SiAmazon } from 'react-icons/si'
import { Section, SectionContainer, SectionHeader, SectionSubHeader } from 'components/Section'

const JobInfo = styled.h3`
  margin-bottom: 0;

  &.title {
    width: 85%;
    padding-top: 0.5em;
    border-top: 1px solid white;
  }

  &.dates {
    margin-top: 0;
  }

  &.tech {
    width: 75%;
  }
`

const JobRow = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  height: auto;
`

const JobSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 40%;
  justify-content: center;
  position: relative;
  z-index: 1000;

  &.left {
    background: linear-gradient(to right, black, 95%, transparent)
  }

  &.right {
    background: linear-gradient(to left, black, 95%, transparent)
  }
`

const JobStory = styled.div`
  opacity: 1;
  width: 100%;
  margin: 1em;

  div {
    opacity: 1;
    transition: opacity 1s;
  }

  ul {
    opacity: 0;
    transition: all 2s, opacity 1s;
    transform: scale(0.5);
    padding-right: 5%;
  }

  &:hover {
    div {
      opacity: 0;
    }

    ul {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const LogoCover = styled.div`
  height: 80%;
  top: 10%;
  margin-left: 5%;
  width: 85%;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px white solid;
  box-shadow: 0px 0px 10px #fff;
  z-index: -1000;
`

// Experience section for home page
const Experience = () => {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader>Experience</SectionHeader>

        <JobRow>
          <JobSummary className='left'>
            <SectionSubHeader className='logo' style={{ paddingBottom: '0.25em' }}>
              Amazon
            </SectionSubHeader>
            <JobInfo className='title'>
              Software Dev. Engineer Intern
            </JobInfo>
            <JobInfo className='dates'>
              May 2022 - August 2022
            </JobInfo>
            <JobInfo className='tech'>
              #Java #TypeScript
            </JobInfo>
          </JobSummary>
          <Parallax style={{ width: '60%' }} translateX={[60, -40]}>
            <JobStory>
              <LogoCover>
                <svg width="0" height="0">
                  <linearGradient id="amazonGrad" x1="0%" y1="80%" x2="0%" y2="50%">
                    <stop offset="0%" style={{ stopColor: "#ff9900", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "white", stopOpacity: 1 }} />
                  </linearGradient>
                </svg>
                <SiAmazon size='150' style={{ padding: '0 15px 0 0', fill: 'url(#amazonGrad)' }} />
              </LogoCover>
              <ul>
                <li>
                  During my last summer of college, I interned at Amazon. After driving the 2,570 miles from College Park, MD to Seattle, WA, I started my work on the Payments Team.
                </li>
                <li>
                  During the internship, I helped the team transition to a new payments architecture by creating a new page and the corresponding processing for clients to examine, troubleshoot, and manage a certain part of the payment verification process.
                </li>
                <li>
                  Before the end of the internship (and my dreaded drive back to MD), I made a thorough presentation of the work I completed during the internship and presented it to my team and stakeholders to take control of future work.
                </li>
              </ul>
            </JobStory>
          </Parallax>
        </JobRow>


        <JobRow>
          <Parallax style={{ width: '60%' }} translateX={[-40, 60]}>

            <JobStory>
              <LogoCover>
                <SiAtandt size='150' color='#00A8E0' style={{ padding: '0 0 0 15px' }} />
              </LogoCover>
              <ul>
                <li>
                  I started working at AT&T the summer after high school graduation as a summer intern and ended up staying for two more years while in school.
                </li>
                <li>
                  During my time there, I worked on the cybersecurity team, designing and building a website for the analysts. My contributions to the site included chat pages, a password manager, dashboards, user management, front-ends for REST APIs, and many other things.
                </li>
                <li>
                  After about 2 years on the project, it fizzled out and I was moved to another team where I worked with C#, AWS Lambdas, and lots of data. After a few months on the new team, my college courses picked up in intensity, so I left AT&T to focus on school.
                </li>
              </ul>
            </JobStory>
          </Parallax>
          <JobSummary className='right'>
            <SectionSubHeader className='logo' style={{ paddingBottom: '0.25em' }}>
              AT&T
            </SectionSubHeader>
            <JobInfo className='title'>
              Associate Cybersecurity Analyst
            </JobInfo>
            <JobInfo className='dates'>
              June 2019 - November 2021
            </JobInfo>
            <JobInfo className='tech'>
              #JavaScript #React #Node.js #GraphQL #AWS
            </JobInfo>
          </JobSummary>
        </JobRow>

      </SectionContainer>
    </Section >
  )
}

export default Experience