import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// Manages changes to document head
const Head = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Jay Desmarais</title>
        <meta name="description" content="Personal Portfolio" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
    </HelmetProvider>

  )
}

export default Head