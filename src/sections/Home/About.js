import React, { useEffect, useState } from 'react'
import { Carousel, CarouselCell, CarouselContainer, CarouselController, CarouselControl, CarouselSlide } from 'components/Carousel'
import { SectionHeader, SectionText, StickyWrapper, StickyContainer } from 'components/Section'
import styled from 'styled-components'
import umd from 'images/umd.png'
import hcc from 'images/hcc.png'
import snowboard from 'images/snowboard.png'
import { Parallax } from 'react-scroll-parallax'

const Image = styled.img`
  height: 150px;
  border-radius: 10px;

  &.snowboard {
    height: 300px;
  }
`

const Dual = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;


  &.education {
    align-items: start;
  }
`

const aboutContent = [
  <CarouselSlide>
    <h1>Hello! 👋🏻 I'm Jay! 👨🏻‍💻 </h1>
    <SectionText>
      I'm a problem solver at heart. By studying computer science, I've discovered my passion for using technology to enhance everyday life. Whether it's crafting engaging websites, empowering apps, or streamlining work, I'm dedicated to creating solutions that make a tangible impact. My goal is to add enjoyment to the ordinary and increase accessibility to the extraordinary. Welcome to my journey of innovation
    </SectionText>
  </CarouselSlide>,
  <CarouselSlide>
    <Dual className='education'>
      <div className='umd'>
        <Image src={umd} alt='umd' />
        <h3>University of Maryland</h3>
        <SectionText>Bachelors in Computer Science
          <br />
          Minor in Real Estate
        </SectionText>
      </div>
      <div className='hcc'>
        <Image src={hcc} alt='umd' />

        <h3>Howard Community College</h3>
        <SectionText>Associate in Cybersecurity</SectionText>
      </div>
    </Dual>
    <h3>
      #full-stack-development #algorithmic-problem-solving #UI-UX-design #AI #ML #data-science #cybersecurity.
    </h3>
  </CarouselSlide >,
  <CarouselSlide>
    <h1>Approach to Work ✅</h1>
    <ul style={{ textAlign: 'left' }}>
      <li>
        Meticulous attention to detail and a drive for excellence.
      </li>
      <li>
        Continual learning and applying new insights to my toolbox.
      </li>
      <li>
        Going above and beyond to satisfy and impress.
      </li>
      <li>
        Keeping up to date with the latest tech and tools.
      </li>
      <li>
        Always keeping the customer in mind.
      </li>
      <li>
        Improving the lives of others.
      </li>
    </ul>
  </CarouselSlide >,
  <CarouselSlide>
    <h1>Getting Outside 🏔️</h1>
    <Dual>
      <SectionText style={{ width: '60%' }}>
        Following my academic achievements, I sought an environment that more closely resonates with my adventurous spirit and active lifestyle, which I accomplished by relocating to the happiest place in the US, Boulder, Colorado, bringing me within view of breathtaking mountains, invigorating <s style={{ color: 'red' }}>ski</s> snowboard resorts, and a wonderfully active community.
      </SectionText>
      <Image className='snowboard' src={snowboard} alt='snowboard' />
    </Dual>
  </CarouselSlide>,
  <CarouselSlide>
    <h1>I'm currently on the hunt for exciting opportunities!<br /><br />Send me a message! 😄</h1>
  </CarouselSlide>
]

// About section for home page
const About = () => {
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [slide, setSlide] = useState(0);
  const [picking, setPicking] = useState(false);
  const [offset, setOffset] = useState(720);

  // Automatically update the carousel
  useEffect(() => {
    if (progress < .4 || progress > .6) {
      // Control the carousel as it is on the top/bottom of the viewport
      if (picking) {
        // Calculate the current position as offset to allow for smooth scrolling as the center of the screen is exited and carousel rotation is now tied to scroll (progress) rather than manual controls
        setOffset(rotation + progress * 360)
        setPicking(false)
      }
      setRotation(offset - progress * 360)
    } else {
      // Control the carousel as it is on the center of the viewport
      if (!picking) {
        // Set the carousel to manuel control
        setPicking(true)
      }
      // Set the carousel to a position based on the selected slide
      setRotation(360 + slide * 72)
    }
  }, [offset, picking, progress, rotation, slide])

  return (
    <>
      <StickyWrapper>
        <StickyContainer>
          <SectionHeader>About</SectionHeader>
          <Parallax style={{ height: '100%' }} rotate={[-20, 20]} onProgressChange={(p) => setProgress(p)}>
            <CarouselContainer onClick={() => setSlide((slide + 1) % 5)}>
              <Carousel rotation={rotation} style={{ transition: picking && 'all 1s' }}>
                {
                  aboutContent.map((content, i) => {
                    return (
                      <CarouselCell>
                        {content}
                      </CarouselCell>
                    )
                  })
                }
              </Carousel>
            </CarouselContainer>
          </Parallax>
          {/* Buttons to control the carousel */}
          <CarouselController style={{ opacity: !picking && 0 }}>
            <CarouselControl active={rotation % 360 >= 0 && rotation % 360 < 72} onClick={() => setSlide(0)} />
            <CarouselControl active={rotation % 360 >= 72 && rotation % 360 < 144} onClick={() => setSlide(1)} />
            <CarouselControl active={rotation % 360 >= 144 && rotation % 360 < 216} onClick={() => setSlide(2)} />
            <CarouselControl active={rotation % 360 >= 216 && rotation % 360 < 288} onClick={() => setSlide(3)} />
            <CarouselControl active={rotation % 360 >= 288 && rotation % 360 < 360} onClick={() => setSlide(4)} />
          </CarouselController>
        </StickyContainer>
      </StickyWrapper>
    </>
  )
}

export default About