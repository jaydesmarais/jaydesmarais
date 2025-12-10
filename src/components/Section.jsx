import styled from 'styled-components'

// Main sect
export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  &.intro {
    min-height: 100vh;

    @media (max-width: 1080px) {
      font-size: 75%;
    }
  }

  &.about {
    min-height: 175vh;

    @media (max-width: 1080px) {
      font-size: 75%;
    }
  }

  &.experience {
    max-width: 100%;
    min-height: 125vh;

    @media (max-width: 1080px) {
      font-size: 75%;
    }
  }

  &.projects {
    min-height: 450vh;
      pointer-events: none; 


    @media (max-width: 1080px) {
      font-size: 75%;
    }
  }

  &.resume {
    min-height: 65vh;
    width: 80%;
  }

  &.notfound {
    width: 90%;
    min-height: 75vh;
    text-align: center;
  }

  &.contact {
    width: 80%;
    min-height: 90vh;
    text-align: center;

    @media (max-width: 1080px) {
      font-size: 75%;
    }
  }

  &.footer {
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const StickyWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  width: 100%;
`

export const StickyContainer = styled.div`
  position: sticky;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  top: 0;
`

export const SectionHeader = styled.h1`
  width: calc(100% - 20px);
  max-width: 1440px;
  margin: 0;
  padding-left: 20px;
  padding-top: 10vh;
  padding-bottom: 20px;
  z-index: 100;
  font-size: 600%;

  @media (max-width: 720px) {
    font-size: 300%;
    padding-top: 5vh;
  }

  &.intro {
    text-align: center;

    @media (max-width: 720px) {
      padding-top: 10vh;
    }
  }

  &.error404 {
    font-size: 1200%;
    padding-bottom: 0;

    @media (max-width: 720px) {
      font-size: 800%
    }
  }

  &.notfound {
    padding: 0;
    padding-bottom: 10vh;

    @media (max-width: 720px) {
      font-size: 400%
    }
  }

  &.projects {
    padding-bottom: 10vh;
  }

  &.experience {
    margin: 0 auto;
  }
`

export const SectionSubHeader = styled.h3`
  margin: 0;
  font-size: 225%;

  &.intro {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 2vh;
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

  &.contact {
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
`

export default Section;