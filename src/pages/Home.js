import React from 'react'
import { Element } from 'react-scroll'
import { navLinks } from 'config'

const Home = () => {

  return (
    <>
      {navLinks.map(({ link, element }, i) => {
        return (
          <Element id={link}>
            {element}
          </Element>
        )
      })}
    </>
  )
}

export default Home