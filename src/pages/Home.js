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
              {name !== 'intro' && name !== 'contact' ? (
                <StickyContainer>
                  <SectionContainer className={name}>
                    {element}
                  </SectionContainer>
                </StickyContainer>) :
                (<SectionContainer className={name}>
                  {element}
                </SectionContainer>)}
            </Section>
          </Element>
        )
      })}
    </>
  )
}

export default Home