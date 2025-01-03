import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { About, Footer, Home, Loading, Navbar, Uses } from '~/client/components'

const Articles = lazy(() =>
  import('~/client/components').then(module => ({ default: module.Articles }))
)
const Contact = lazy(() =>
  import('~/client/components').then(module => ({ default: module.Contact }))
)
const Work = lazy(() =>
  import('~/client/components').then(module => ({ default: module.Work }))
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/work', element: <Work /> },
      { path: '/articles', element: <Articles /> },
      { path: '/uses', element: <Uses /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

export const App = () => (
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
    <Footer />
  </Suspense>
)
