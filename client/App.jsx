import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Navbar from '~/client/components/Navbar'
import About from '~/client/components/About'
import Home from '~/client/components/Home'
import Work from '~/client/components/Work'
import Articles from '~/client/components/Articles'
import Contact from '~/client/components/Contact'
import Footer from '~/client/components/Footer'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/articles' element={<Articles />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
)

export default App
