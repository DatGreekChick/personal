import React, { lazy, Suspense } from 'react'

import Link from './Link'
import Loading from './Loading'
const Expand = lazy(() => import('./Expand'))

import { ResumeButton } from '~/client/styles/button'

import windowTrick from '~/client/window'

export default () => {
  windowTrick()

  return (
    <>
      <Link href='/assets/Eleni-Arvanitis-Resume.pdf'>
        <ResumeButton>View Resume</ResumeButton>
      </Link>
      <Suspense fallback={<Loading />}>
        <Expand />
      </Suspense>
    </>
  )
}
