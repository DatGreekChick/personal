import React from 'react'

import Link from './Link'
import Expand from './Expand'

import { ResumeButton } from '~/client/styles/button'

import windowTrick from '~/client/window'

export default () => {
  windowTrick()

  return (
    <>
      <Link href='/assets/EleniArvanitisKoniorResume.pdf'>
        <ResumeButton>View Resume</ResumeButton>
      </Link>
      <Expand />
    </>
  )
}
