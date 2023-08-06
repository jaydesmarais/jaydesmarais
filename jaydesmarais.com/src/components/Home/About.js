import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 20vh;
  min-height: 65vh;
`

const About = () => {
  return (
    <StyledContainer id="about">
      <h1>About</h1>
      <br />
      <p>
        As a senior in high school, I started taking classes at a local community college to complete an associate's degree in cybersecurity. Having amassed 54 credits while in high school, I continued, completing my associate degree one semester out of high school. From there, I enrolled in the University of Maryland, College Park to continue my education in computer science, where I recently graduated with a bachelor’s degree in computer science and a minor in Real Estate Development.
      </p>
      <p>
        Throughout my education and experience, I have touched a wide variety of fields within computer science. I have learned about full-stack development, algorithms, UI/UX design, cybersecurity threats and mitigations, and more! Although there is no specific field that I pull most of my motivation from, I find I thrive best in positions in which I get to work to problem solve and utilize solutions from across the many fields I have studied.
      </p>
      <p>
        I am an extremely dedicated person and put lots of detail into all of my work. I am constantly learning and enjoy putting any new knowledge to use in my problems or ideas, whether they are in my personal or professional life.
      </p>
      <p>
        After graduating from the University of Maryland, College Park, I moved out to Boulder, Colorado to get closer to the mountains, ski resorts, and a more active community. I am extremely excited to start my post-grad life in Colorado and I can't wait to see what opportunities open up!
      </p>
    </StyledContainer>
  )
}

export default About