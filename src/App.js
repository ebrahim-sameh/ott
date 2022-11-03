import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { OTTAudio, OTTImage, OTTVideo } from './Page'
import { Links } from './Components'

const App = () => {
  return (
    <>
    <Links />
      <Routes>
        <Route path='/' element={<OTTAudio />} />
        <Route path='/image' element={<OTTImage />} />
        <Route path='/video' element={<OTTVideo />} />
      </Routes>
    </>
  )
}

export default App