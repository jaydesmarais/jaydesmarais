import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 10vh;
  height: 65vh;
`

const StyledIframe = styled.iframe`
    display: inline-flex;
    top: 0;
    left: 0;
    height: 55vh;
`;

const Resume = () => {
  return (
    <StyledContainer>
      <h1>Resume</h1>
      <StyledIframe title='resume' src="https://jaydesmarais.s3.us-east-2.amazonaws.com/Jay+Desmarais+-+Resume.pdf" width="100%" height="vh" />
    </StyledContainer>
  )
}

export default Resume;