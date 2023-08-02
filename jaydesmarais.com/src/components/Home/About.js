import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding-top:'20vh';
  align-items:'left';
  height: '80vh';
  display: 'grid';
  color: white;
`

const About = () => {
  return (
    <StyledContainer id="about">
      <h1>About</h1>
    </StyledContainer>
  )
}

export default About