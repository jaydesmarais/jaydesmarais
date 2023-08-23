import styled from 'styled-components'

// Main sect
export const Section = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;

  &.intro {
    min-height: 100vh;
  }

  &.about {
    min-height: 200vh;
  }

  &.experience {
    min-height: 150vh;
  }

  &.projects {
    min-height: 300vh;
  }

  &.resume {
    min-height: 65vh;
  }

  &.lost404 {
    min-height: 75vh;
    justify-content: center;
  }

  &.contact {
    min-height: 90vh;
  }

  &.footer {
    display: block;
    padding-top: 0;
    min-height: 10vh;
    text-align: center;
  }
`

export const StickyContainer = styled.div`
  position: sticky;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  top: 0;
`

export const SectionContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
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
      padding-top: 5vh;
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