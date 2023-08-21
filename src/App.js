import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader'
import Layout from 'sections/Layout/Layout'
import Home from 'pages/Home'
import Resume from 'pages/Resume'
import NotFound from 'pages/NotFound'

/* 
  Renders app components based on the browser route.

  Parent:
    '/' | <Layout>
      - Home path to which child route element is passed as an '<Outlet>'
      - Contains layout elements like navbar and footer as well as overall styling
  
  Children:
    '/' (index) | <Home/>
      - The front page of the site where most of the content lies
    '/home | <Home/>
      - Another alias for '/'
    '/resume' | <Resume/>
      - A page rendered with a resume
    '*' | <NotFound/>
      - Cath-All 404 error not found page
      - Gives user option to return to home
*/
const App = () => {

  WebFont.load({
    google: {
      families: [
        'Italiana', // Fine Lines
        'Athiti', // Smaller text!
        'Bebas Neue', // Caution Tape!
        'Quicksand' // 
      ]
    }
  });

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
