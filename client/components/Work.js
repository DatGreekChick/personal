import React from 'react'

import Link from '~/client/components/Link'
import Expand from '~/client/components/Expand'

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
