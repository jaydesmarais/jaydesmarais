import React from 'react'
import { Element } from 'react-scroll'
import { navLinks } from 'config'
import { Section, SectionContainer, StickyContainer } from 'components/Section'

const Home = () => {
  return (
    <>
      {navLinks.map(({ name, element }, i) => {
        return (
          <Element id={name}>
            <Section className={name}>
              <StickyContainer>
                <SectionContainer className={name}>
                  {element}
                </SectionContainer>
              </StickyContainer>
            </Section>
          </Element>
        )
      })}
    </>
  )
}

export default Home