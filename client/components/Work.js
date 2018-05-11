import React from 'react'
import Expand from './Expand'
import windowTrick from '~/client/window'
import '~/public/assets/styles/work.css'

export default () => {
  windowTrick()

  return <div className='work'>
    <a href='/assets/Eleni-Arvanitis-Resume.pdf' target='_blank' rel='noopener'>
      <button className='resume-button'>View Resume</button>
    </a>
    <Expand/>
  </div>
}