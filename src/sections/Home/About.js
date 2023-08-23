import React, { useState } from 'react'
import { styled } from 'styled-components'
import { SectionHeader, SectionText } from 'components/Section'
import { Parallax } from 'react-scroll-parallax'

const CarouselSlide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto 40px;
`

const CarouselContainer = styled.div`
  transform-style: preserve-3d;
  margin: 40px 0;
  position: relative;
  width: 820px;
  height: 560px;
  margin: 80px auto;
  perspective: 2000px;
`

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${props => props.rotation ? `translateZ(-850px) rotateY(${-props.rotation}deg)` : 'translateZ(-850px)'};
`

const CarouselCell = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 780px;
  height: 520px;
  transition: transform 1s, opacity 1s;
  background: rgba(0,0,0,.9);
  border: 1px solid white;
  border-radius: 10px;
  box-shadow:
    0 0 7px #fff,
    0 0 10px #fff;

  // 
  &:nth-child(1) { transform: rotateY(  0deg) translateZ(850px); }
  &:nth-child(2) { transform: rotateY( 72deg) translateZ(850px); }
  &:nth-child(3) { transform: rotateY(144deg) translateZ(850px); }
  &:nth-child(4) { transform: rotateY(216deg) translateZ(850px); }
  &:nth-child(5) { transform: rotateY(288deg) translateZ(850px); }
`

const aboutContent = [
  <CarouselSlide>
    <h1>I'm Jay! 👨🏻‍💻 </h1>
    <SectionText>
      My love for software development began when I enrolled in cyber-security courses at my local community college. Having amassed 54 college credits prior to high school graduation, I continued to complete my associate's degree in cyber-security just one semester after high school. Following that, I pursued a more rigorous education at the University of Maryland, College Park. This journey culminated in the successful attainment of a bachelor's degree in computer science, which I complemented with a minor in Real Estate Development.
    </SectionText>
  </CarouselSlide>,
  <CarouselSlide>
    <h1>Education 🎓</h1>
    <SectionText>
      My educational path has been marked by exploration across a diverse spectrum of computer science disciplines. My proficiency spans full-stack development, algorithmic problem-solving, UI/UX design, AI/ML, and cyber-security intricacies, among others. This diverse exposure has not only equipped me with versatile skills but has also ignited a passion for solving complex challenges that transcend traditional disciplinary boundaries.
    </SectionText>
  </CarouselSlide>,
  <CarouselSlide>
    <h1>Approach to Work 💭</h1>
    <SectionText>
      My approach to work is defined by meticulous attention to detail and a drive for excellence. Continual learning is the cornerstone of my personal and professional philosophy, and I eagerly apply new insights to my problem-solving toolbox. Whether applied to personal projects or professional endeavors, I derive immense satisfaction from applying the latest knowledge to create innovative solutions.
    </SectionText>
  </CarouselSlide>,
  <CarouselSlide>
    <h1>Getting Outside 🏔️</h1>
    <SectionText>
      Following my academic achievements, I sought an environment that more closely resonates with my adventurous spirit and active lifestyle, which I accomplished by relocating to the <a style={{ color: 'white' }} href="https://www.bouldercoloradousa.com/travel-info/bouder-happiest-city/#:~:text=National%20Geographic%20and%20the%20%22Today,list%20for%20several%20years%20running." target="_blank" rel="noreferrer">Happiest Place in the US</a>, Boulder, Colorado, bringing me within view of breathtaking mountains, invigorating <s style={{ color: 'gray' }}>ski</s> snowboard resorts, and a wonderfully active community.
    </SectionText>
  </CarouselSlide>,
  <CarouselSlide>
    <h1>Hi There! 👋🏻 </h1>
  </CarouselSlide>
]

// About section for home page
const About = () => {
  const [progress, setProgress] = useState(null);

  return (
    <>
      <SectionHeader>About</SectionHeader>
      <Parallax rotate={[-20, 20]} onProgressChange={(progress) => setProgress(progress)}>
        <CarouselContainer>
          <Carousel rotation={progress * 100}>
            {aboutContent.map((content, i) => {
              return (
                <CarouselCell>
                  {content}
                </CarouselCell>
              )
            })}
          </Carousel>
        </CarouselContainer>
      </Parallax>
    </>
  )
}

export default About