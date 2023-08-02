import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import GlobalStyle from '../../styles/GlobalStyle'
import styled from 'styled-components'
import Head from './Head'
import NavBar from './NavBar'
import Footer from './Footer'

const StyledChild = styled.div`
  padding: 0 13vw;
  margin: 0 auto;
  max-width: 1000px;
`

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Head />
      <GlobalStyle />
      <>
        <NavBar location={location} />
        <StyledChild>
          <Outlet />
        </StyledChild>
        <Footer />
      </>
    </>

  )
}

export default Layout