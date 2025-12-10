import React, { Suspense } from 'react'
import { Element } from 'react-scroll'
import { navLinks } from '../config'
import { Section } from 'components/Section'

const Home = () => {
  return (
    <>
      {navLinks.map(({ name, element }) => {
        return (
          <Element key={name} id={name}>
            <Section className={name}>
              <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
                {element}
              </Suspense>
            </Section>
          </Element>
        )
      })}
    </>
  )
}

export default Home
