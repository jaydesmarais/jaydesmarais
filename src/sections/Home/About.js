import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 7vh;
  padding-bottom: 3vh;
`

// About section for home page
const About = () => {
  return (
    <StyledContainer id="about">
      <h1>About</h1>
      <br />
      <p>
        Hi there! 👋🏻 My name is Jay Desmarais! I began my immersion into the field of computer science as a junior in high school after deciding to take cyber-security courses at my local community college. Having amassed 54 college credits prior to high school graduation, I continued to complete my associate's degree in cyber-security just one semester after high school. Following that, I pursued a more rigorous education at the University of Maryland, College Park. This journey culminated in the successful attainment of a bachelor's degree in computer science, which I complemented with a minor in Real Estate Development.
      </p>
      <p>
        My educational path has been marked by exploration across a diverse spectrum of computer science disciplines. My proficiency spans full-stack development, algorithmic problem-solving, UI/UX design, AI/ML, and cyber-security intricacies, among others. This diverse exposure has not only equipped me with versatile skills but has also ignited a passion for solving complex challenges that transcend traditional disciplinary boundaries.
      </p>
      <p>
        My approach to work is defined by meticulous attention to detail and a drive for excellence. Continual learning is the cornerstone of my personal and professional philosophy, and I eagerly apply new insights to my problem-solving toolbox. Whether applied to personal projects or professional endeavors, I derive immense satisfaction from applying the latest knowledge to create innovative solutions.
      </p>
      <p>
        Following my academic achievements, I sought an environment that more closely resonates with my adventurous spirit and active lifestyle, which I accomplished by relocating to the <a style={{ color: 'white' }} href="https://www.bouldercoloradousa.com/travel-info/bouder-happiest-city/#:~:text=National%20Geographic%20and%20the%20%22Today,list%20for%20several%20years%20running." target="_blank" rel="noreferrer">Happiest Place in the US</a>, Boulder, Colorado, bringing me within view of breathtaking mountains, invigorating <s style={{ color: 'gray' }}>ski</s> snowboard resorts, and a wonderfully active community.
      </p>
    </StyledContainer >
  )
}

export default About