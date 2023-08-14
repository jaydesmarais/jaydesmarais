import React from 'react'
import styled from 'styled-components'
import { SiAtandt, SiAmazon } from 'react-icons/si'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 7vh;
  padding-bottom: 3vh;
`

const StyledHeader = styled.h3`
  display: flex;
  align-items: center;
`

const StyledSubHeader = styled.h4`
  margin-top: 0;
`

const Experience = () => {
  return (
    <StyledContainer id="experience">
      <h1>Experience</h1>
      <br />
      <StyledHeader><SiAmazon size='30' style={{ padding: '0 15px 0 0' }} />Amazon - Software Development Engineer Intern</StyledHeader>
      <StyledSubHeader>May 2022 - August 2022</StyledSubHeader>
      <ul>
        <li>
          Successfully completed a comprehensive full-stack software development project throughout a 12-week internship. This encompassed not only project completion, but also onboarding, meticulous documentation, and seamless handoff procedures.
        </li>
        <li>
          Demonstrated expertise in enhancing a critical page using Typescript and Java, which provided clients with the ability to examine, troubleshoot, and effectively manage specific customer payment transaction details.
        </li>
        <li>
          Developed and employed a dynamic frontend design alongside robust APIs, facilitating seamless data retrieval and efficient updates of critical resources directly from the DynamoDB table.
        </li>
        <li>
          Crafted and presented a captivating final presentation of the project to both the internal team and clients. This platform served as an avenue for invaluable feedback incorporation and a smooth transition for the handover of the project, including any ambitious stretch goals, to the designated successors.
        </li>
      </ul>
      <StyledHeader><SiAtandt size='30' style={{ padding: '0 15px 0 0' }} />AT&T - Associate Cybersecurity Analyst</StyledHeader>
      <StyledSubHeader>June 2019 - November 2021</StyledSubHeader>
      <ul>
        <li>
          Leveraged JavaScript, React, GraphQL, Apollo Server, Semantic UI, and followed the Agile development model to develop and optimized a suite of frontend and backend tools, encompassing API front-ends, chat pages, a password manager, dashboard, and more to enhance a collaborative platform utilized by internal cybersecurity analysts.
        </li>
        <li>
          Utilized AWS Lambdas to execute a fusion of SQL queries and C# functions, enabling the manipulation and retrieval of extensive database entries. This process dynamically tailored tens of thousands of records into specific file formats based on user queries.
        </li>
        <li>
          Distinguished myself within a select group of five interns, being the sole individual to be handpicked for continued engagement within the team upon completion of the program.
        </li>
        <li>
          Excelled in a flexible work environment, adeptly contributing to tasks both individually and as part of group efforts. Adapted seamlessly to varying work settings, including both in-person and remote engagements, ensuring effective teamwork and successful project outcomes.
        </li>
      </ul>
    </StyledContainer>
  )
}

export default Experience