import React from 'react'

import Link from './Link'
import Expand from './Expand'

import windowTrick from '~/client/window'

import '~/public/assets/styles/work.css'
import { ResumeButton } from '~/client/styles/button'

export default () => {
  windowTrick()

  return (
    <>
      <Link href='/assets/Eleni-Arvanitis-Resume.pdf'>
        <ResumeButton>View Resume</ResumeButton>
      </Link>
      <Expand />
    </>
  )
}
