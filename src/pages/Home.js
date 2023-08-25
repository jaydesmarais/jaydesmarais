import React from 'react'
import { Element } from 'react-scroll'
import { navLinks } from 'config'
import { Section } from 'components/Section'

const Home = () => {
  return (
    <>
      {navLinks.map(({ name, element }, i) => {
        return (
          <Element id={name}>
            <Section className={name}>
              {element}
            </Section>
          </Element>
        )
      })}
    </>
  )
}

export default Home