import React, { useEffect, useState } from 'react'
import { Carousel, CarouselCell, CarouselContainer, CarouselController, CarouselControl, CarouselSlide } from 'components/Carousel'
import { SectionHeader, SectionText } from 'components/Section'
import { Parallax } from 'react-scroll-parallax'

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
      <SectionHeader>About</SectionHeader>
      <Parallax rotate={[-20, 20]} onProgressChange={(p) => setProgress(p)}>
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

    </>
  )
}

export default About