import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 20vh;
  min-height: 65vh;
`

const Experience = () => {
  return (
    <StyledContainer id="experience">
      <h1>Experience</h1>
      <br />
      <h3>Amazon</h3>
      <ul>
        <li>
          Completed an assigned full-stack software development project in addition to onboarding, its documentation, handoff, and more during the 12-week internship.
        </li>
        <li>
          Revised and improved a page using Typescript and Java that allows clients to inspect, troubleshoot, and manage specific customer payment transaction details.
        </li>
        <li>
          Developed and employed a frontend design and APIs that allowed fetching and proper updating of resources from the DynamoDB table.
        </li>
        <li>
          Created and presented a final project to the team and clients to accept feedback and hand off the project and any stretch goals to those taking over any remaining work.
        </li>
      </ul>
      <h3>AT&T</h3>
      <ul>
        <li>
          Designed effective frontend and backend tools including API frontends, chat pages, a password manager, and dashboards using JavaScript, GraphQL, Apollo Server, React, Semantic UI, and the Agile development model to be implemented as features on a collaboration platform utilized by internal cybersecurity analysts.
        </li>
        <li>
          Made use of AWS Lambdas to implement a combination of SQL queries and C# functions that manipulated and returned tens of thousands of database entries in specific file formats based on user queries.
        </li>
        <li>
          Completed work in a Unix/Linux environment and used git and AWS for code version control.
        </li>
        <li>
          Partook in an internship program made up of five students and was the only one selected to be brought on to the team after the completion of the program.
        </li>
        <li>
          Collaborated in a shifting workplace by completing tasks individually and in group settings in both in-person and remote environments.
        </li>
      </ul>
    </StyledContainer>
  )
}

export default Experience