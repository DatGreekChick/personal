import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition'

import Button from '~/client/components/Button'

import { me, description } from '~/content/about'

import '~/public/assets/styles/home.css'

export default () => {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIdx(Math.floor(Math.random() * Math.floor(me.length))),
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
          springConfig={presets.gentle}
        />
      </span>
      <p className='home-description'>{description}</p>
      <NavLink to='/contact'>
        <Button text='Say hi' />
      </NavLink>
    </div>
  )
}
