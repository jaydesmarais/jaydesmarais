import React from 'react';
import styled from 'styled-components'
import { Section, SectionContainer, SectionHeader } from 'components/Section'

const StyledIframe = styled.iframe`
    display: inline-flex;
    top: 0;
    left: 0;
    height: 55vh;
`;

const Resume = () => {
  return (
    <Section className='resume'>
      <SectionContainer>
        <SectionHeader>Resume</SectionHeader>
        <StyledIframe title='resume' src="https://jaydesmarais.s3.us-east-2.amazonaws.com/Jay+Desmarais+-+Resume.pdf" width="100%" height="vh" />
      </SectionContainer>
    </Section>
  )
}

export default Resume;