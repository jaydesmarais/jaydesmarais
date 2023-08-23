import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BsGithub, BsFiletypePdf } from 'react-icons/bs'
import { InternalLink } from 'components/Buttons'
import Headshot from 'images/headshot.png'
import { SectionHeader, SectionSubHeader, SectionText } from 'components/Section'
import { ExternalLink } from 'components/Buttons'

const Group = styled.div`
  margin: auto 5%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const GroupText = styled.div`
  width: 55%;

  @media (max-width: 720px) {
    width: 100%;
  }
`

const StyledImage = styled.img`
  border-radius: 10px;
  filter: grayscale(100%);
  width: 35%;
  object-fit: cover;
  margin: 1em auto;

  @media (max-width: 720px) {
    width: 50%;
  }
`

const scrollAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate(-10px, -10px) }
`

const ScrollArrow = styled.div`
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
`

const ScrollText = styled.p`
  font-family: 'Italiana';
  text-align: center;
  font-size: 125%;
  margin-bottom: 10px;
  margin-top: 7vh;

  @media (max-width: 720px) {
    margin-top: 25px;
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
          <InternalLink to="/resume" style={{ textDecoration: 'none' }}>
            Check out my Resume &nbsp;
            <BsFiletypePdf size={20} />
          </InternalLink>
          <br />
          <ExternalLink href='https://github.com/jaydesmarais/jaydesmarais' target='_black'>
            &nbsp; Site Under Construction &nbsp;
            <BsGithub size={25} />
          </ExternalLink>
        </GroupText>
        <StyledImage src={Headshot} alt='headshot' />
      </Group>
      <ScrollText>Scroll</ScrollText>
      <ScrollArrow />
    </>

  )
}

export default Intro