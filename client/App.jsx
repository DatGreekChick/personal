import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from '~/client/components/About'
import Footer from '~/client/components/Footer'
import Home from '~/client/components/Home'
import Loading from '~/client/components/Loading'
import Navbar from '~/client/components/Navbar'

const Articles = lazy(() => import('~/client/components/Articles'))
const Contact = lazy(() => import('~/client/components/Contact'))
const Work = lazy(() => import('~/client/components/Work'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/work', element: <Work /> },
      { path: '/articles', element: <Articles /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

const App = () => (
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
    <Footer />
  </Suspense>
)

export default App
