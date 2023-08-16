import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledContainer = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledSubtitle = styled.h3`
  text-align: center;
`;

// Lost 404 content for home page
const Lost404 = () => {
  return (
    <>
      <StyledContainer>
        <StyledTitle>404 | Page Not Found</StyledTitle>
        <StyledSubtitle>
          You look lost.{" "}
          <Link to={"/"}>Return Home</Link>
        </StyledSubtitle>
      </StyledContainer>
    </>
  )
}

export default Lost404