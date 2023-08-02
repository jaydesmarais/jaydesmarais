import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding-top:'20vh';
  align-items:'left';
  height: '80vh';
  display: 'grid';
  color: white;
`

const Projects = () => {
  return (
    <StyledContainer id="projects">
      <h1>Projects</h1>
    </StyledContainer>
  )
}

export default Projects