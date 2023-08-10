import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import GlobalStyle from '../../styles/GlobalStyle'
import styled from 'styled-components'
import Head from './Head'
import NavBar from './NavBar'
import NavMenu from './NavMenu'
import Footer from './Footer'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

const StyledContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
`

const StyledChildren = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`

const StyledLeftChild = styled.div`
  width: 15%;
  text-align: center;

  @media (max-width: 720px) {
    display:none
  }
`

const StyledMiddleChild = styled.div`
  width: 70%;
  max-width: 1440px;

  @media (max-width: 720px) {
    width: 90%;
  }
`

const StyledRightChild = styled.div`
  width: 15%;
  text-align: center;

  @media (max-width: 720px) {
    display:none
  }
`

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Head />
      <GlobalStyle />

      <StyledContainer>

        <NavBar location={location} />
        <NavMenu location={location} />

        <StyledChildren>
          <StyledLeftChild>
            <LeftSideBar />
          </StyledLeftChild>
          <StyledMiddleChild>
            <Outlet />
          </StyledMiddleChild>
          <StyledRightChild>
            <RightSideBar />
          </ StyledRightChild>
        </StyledChildren>

        <Footer />

      </StyledContainer>
    </>

  )
}

export default Layout