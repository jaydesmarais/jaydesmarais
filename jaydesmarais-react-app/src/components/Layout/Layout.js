import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from '../../styles/GlobalStyle'
import Head from './Head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <GlobalStyle />
      <>
        <NavBar />
        <div id='section'>
          <Outlet/>
        </div>
        <Footer />
      </>
    </>

  )
}

export default Layout