import { Section, SectionContainer, SectionHeader } from 'components/Section';
import React from 'react'
import { InternalLink } from 'components/Buttons';

// Lost 404 content for home page
const NotFound = () => {
  return (
    <>
      <Section className='notfound'>
        <SectionContainer className='notfound'>
          <SectionHeader className='error404'>
            404
          </SectionHeader>
          <SectionHeader className='notfound'>
            Page Not Found
          </SectionHeader>

          <InternalLink to={"/"}>Return Home</InternalLink>
        </SectionContainer>
      </Section>
    </>
  )
}

export default NotFound