import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { presets } from 'react-text-transition'

import Button from '~/client/components/Button'
import { Me, Carousel, Description } from '~/client/styles/home'

import { me, description } from '~/content/about'

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
    <Me>
      <span>
        I am <span />
        <Carousel
          direction='up'
          inline={true}
          text={me[idx % me.length]}
          springConfig={presets.gentle}
        />
      </span>
      <Description>{description}</Description>
      <NavLink to='/contact'>
        <Button text='Say hi' />
      </NavLink>
    </Me>
  )
}
