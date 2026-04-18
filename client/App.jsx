import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { Footer, Home, Loading, Navbar } from './components'

const About = lazy(() =>
  import('./components/About').then(module => ({ default: module.About }))
)
const Articles = lazy(() =>
  import('./components/Articles').then(module => ({ default: module.Articles }))
)
const Contact = lazy(() =>
  import('./components/Contact').then(module => ({ default: module.Contact }))
)
const Uses = lazy(() =>
  import('./components/uses').then(module => ({ default: module.Uses }))
)
const Work = lazy(() =>
  import('./components/Work').then(module => ({ default: module.Work }))
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
