import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useParallaxController } from 'react-scroll-parallax'
import GlobalStyle from '../../styles/GlobalStyle'
import Head from './Head'
import NavBar from './NavBar'
import NavMenu from './NavMenu'
import Footer from './Footer'



const Layout = () => {
  const location = useLocation();
  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController.update();
  }, [location.pathname, parallaxController]);

  return (
    <>
      {/* React Helmet Wrapper for site metadata */}
      <Head />
      {/* Styling applied to the site as a whole */}
      <GlobalStyle />
      {/* NavBar rendered on larger screens */}
      <NavBar location={location} />
      {/* NavMenu rendered on smaller screens */}
      <NavMenu location={location} />
      {/* Child element passed from the nested <Route> */}
      <Outlet />
      {/* Footer element displayed at bottom of all pages */}
      <Footer />
    </>
  )
}

export default Layout