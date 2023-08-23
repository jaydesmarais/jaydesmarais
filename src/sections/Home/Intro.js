import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BsGithub, BsFiletypePdf } from 'react-icons/bs'
import { StyledLink } from 'components/Buttons'
import Headshot from 'images/headshot.png'
import { SectionHeader, SectionSubHeader, SectionText } from 'components/Section'
import { Parallax } from 'react-scroll-parallax'

const Group = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const GroupText = styled.div`
  width: 55%;
`

const StyledImage = styled.img`
  border-radius: 10px;
  filter: grayscale(100%);
  width: 35%;
  object-fit: cover;

  @media (max-width: 1080px) {
    width: calc(100%);
  }
`

const Warning = styled.a`
  font-family: 'Italiana';
  text-decoration: none;
  color: white;
  font-size: 200%;
  height: auto;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7vh;
  background: linear-gradient(transparent);
  border-top: white 1px solid;
  transition: all .2s ease-in-out; 

  &:hover {
    cursor: pointer;
    text-shadow: white 1px 0 10px; 
    box-shadow: white 1px 0 10px;
    transform: scale(1.5);
  }  
`

const scrollAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate(-10px, -10px) }
`

const StyledScrollArrow = styled.div`
position: relative;
margin: 0 auto 40px;
width: 40px;
height: 40px;
transform: rotate(45deg);
border-left: none;
border-top: none;
border-right: 1px #fff solid;
border-bottom: 1px #fff solid;
background-color: black;

  &:before {
  position: absolute;
  left: 50%;
  content: '';
  width: 20px;
  height: 20px;
  top: 50%;
  margin: -10px 0 0-10px;
  border-left: none;
  border-top: none;
  border-right: 1px #fff solid;
  border-bottom: 1px #fff solid;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: ${scrollAnimation};
}

@media(max-width: 1080px) {
  top: 2vh;
}
`

// Intro section for home page
const Intro = () => {
  return (
    <>
      <SectionHeader className='intro'>
        Jay Desmarais
      </SectionHeader>
      <Group>
        <GroupText>
          <SectionSubHeader className='intro'>
            I design and build things for the web
          </SectionSubHeader>
          <SectionText>
            I{"'"}m a software engineer based in Boulder, CO with a wide range of experience and education in the realms of full-stack programming, UI/UX, algorithms, AI, ML, cybersecurity, and more, which I pull from to design and build solutions to complex problems.
          </SectionText>
          <StyledLink to="/resume" style={{ textDecoration: 'none' }}>
            Check out my Resume &nbsp;
            <BsFiletypePdf size={20} />
          </StyledLink>
        </GroupText>
        <StyledImage src={Headshot} alt='headshot' />
      </Group>

      <Warning href='https://github.com/jaydesmarais/jaydesmarais' target='_black'>
        <BsGithub size={25} />
        &nbsp; Site Updated Weekly &nbsp;
        <BsGithub size={25} />
      </Warning>

      <div style={{
        fontFamily: 'italiana', textAlign: 'center', color: 'white', fontSize: 'larger'
      }}>Scroll</div>
      <StyledScrollArrow />
    </>

  )
}

export default Intro