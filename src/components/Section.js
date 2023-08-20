import styled from 'styled-components'

// Main sect
export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 10vh;
  height: auto;

  &.intro {
    display: flex;
    min-height: 80vh;
    justify-content: center;
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
  width: 75vw;
`

export const SectionHeader = styled.h1`
  &.intro {
    margin-top: 0;
    font-size: 400%;
    text-align: left;

    @media (max-width: 720px) {
      font-size: 300%;
    }
  }
`

export const SectionSubHeader = styled.h3`
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