import React from 'react'

import Expand from './Expand'
import windowTrick from '~/client/window'

import '~/public/assets/styles/work.css'
import { ResumeButton } from '~/client/styles/button'

export default () => {
  windowTrick()

  return (
    <div className='work'>
      <a
        href='/assets/Eleni-Arvanitis-Resume.pdf'
        target='_blank'
        rel='noopener'
      >
        <ResumeButton>View Resume</ResumeButton>
      </a>
      <Expand />
    </div>
  )
}
