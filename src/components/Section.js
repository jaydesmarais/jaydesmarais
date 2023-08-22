import styled from 'styled-components'

// Main sect
export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: auto;
  overflow: hidden;

  &.intro {
    display: flex;
    min-height: 100vh;
    justify-content: center;
  }

  &.about {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  &.resume {
    min-height: 65vh;
  }

  &.lost404 {
    min-height: 75vh;
    justify-content: center;
  }

  &.footer {
    display: block;
    padding-top: 0;
    position: relative;
    min-height: 10vh;
    text-align: center;
  }
`

export const SectionContainer = styled.div`
  max-width: 1440px;
  width: 90%;

  &.scroll{
    background-color: black;
  }
`

export const SectionHeader = styled.h1`
  margin: 0;
  padding-top: 10vh;
  padding-bottom: 5vh;
  z-index: 100;
  font-size: 600%;

  &.intro {
    font-size: 600%;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 300%;
    }
  }
`

export const SectionSubHeader = styled.h3`
  margin: 0;
  font-size: 225%;

  &.intro {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 4vh;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 150%;
    }
  }

  &.logo {
    display: flex;
    align-items: center;
  }
`

export const SectionText = styled.p`
  &.logo {
    display: flex;
    align-items: center;
  }
`

export default Section;