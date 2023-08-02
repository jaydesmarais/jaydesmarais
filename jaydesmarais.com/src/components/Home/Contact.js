import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding-top:'20vh';
  align-items:'left';
  height: '80vh';
  display: 'grid';
  color: white;
`

const Contact = () => {
  return (
    <StyledContainer id="contact">
      <h1>Contact</h1>
    </StyledContainer>
  )
}

export default Contact