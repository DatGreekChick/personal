import React, { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import '~/public/assets/styles/index.css'

import Navbar from '~/client/components/Navbar'
import Footer from '~/client/components/Footer'
import Loading from '~/client/components/Loading'

const About = lazy(() => import('~/client/components/About'))
const Home = lazy(() => import('~/client/components/Home'))
const Work = lazy(() => import('~/client/components/Work'))
const Articles = lazy(() => import('~/client/components/Articles'))
const Contact = lazy(() => import('~/client/components/Contact'))

export default () => (
  <Router>
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  </Router>
)
