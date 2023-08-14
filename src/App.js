import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'sections/Layout/Layout'
import Home from 'pages/Home'
import Resume from 'pages/Resume'
import NotFound from 'pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
