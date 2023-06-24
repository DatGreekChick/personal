import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from '~/client/components/About'
import Articles from '~/client/components/Articles'
import Contact from '~/client/components/Contact'
import Footer from '~/client/components/Footer'
import Home from '~/client/components/Home'
import Navbar from '~/client/components/Navbar'
import Work from '~/client/components/Work'

const createChild = (path, element) => ({ path, element })

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      createChild('/', <Home />),
      createChild('/about', <About />),
      createChild('/work', <Work />),
      createChild('/articles', <Articles />),
      createChild('/contact', <Contact />),
    ],
  },
])

const App = () => (
  <>
    <RouterProvider router={router} />
    <Footer />
  </>
)

export default App
