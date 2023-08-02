import React from 'react'
import Intro from '../components/Home/Intro'
import About from '../components/Home/About'
import Experience from '../components/Home/Experience'
import Projects from '../components/Home/Projects'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <>
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default Home