import { Section, SectionHeader, SectionSubHeader } from 'components/Section';
import React from 'react'
import { Link } from 'react-router-dom'

// Lost 404 content for home page
const Lost404 = () => {
  return (
    <>
      <Section className='lost404'>
        <SectionHeader>404 | Page Not Found</SectionHeader>
        <SectionSubHeader>
          You look lost.{" "}
          <Link to={"/"}>Return Home</Link>
        </SectionSubHeader>
      </Section>
    </>
  )
}

export default Lost404