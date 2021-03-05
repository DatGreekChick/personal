import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition'

import '~/public/assets/styles/home.css'
import { me, description } from '~/content/about'

export default () => {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIdx(idx => ++idx),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className='me'>
      <span>
        I am <span />
        <TextTransition
          className='carousel-items'
          direction='up'
          inline={true}
          text={me[idx % me.length]}
          springConfig={presets.wobbly}
        />
      </span>
      <p className='home-description'>{description}</p>
      <NavLink to='/contact'>
        <button>Say hi</button>
      </NavLink>
    </div>
  )
}
