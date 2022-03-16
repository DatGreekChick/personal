import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { presets } from 'react-text-transition'

import Button from '~/client/components/Button'
import { Me, Carousel, Description } from '~/client/styles/home'

export default () => {
  const [idx, setIdx] = useState(0)
  const me = [
    ' a software engineer 👩🏻‍💻',
    ' Greek 🇬🇷',
    ' an economist 📈',
    ' inquisitive 🤔',
    ' a gamer 🎮',
    ' innovative 💥',
    ' a Ravenclaw 🦅',
    ' adventurous 🌍',
    ' a bassist 🎸',
    ' fierce 🔥',
    ' a pioneer 🚀',
    ' imaginative ⚡️',
    ' a STEMinist 👩🏻‍🔬',
  ]

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
      <Description>
        After graduating from NYU with a B.A. in Economics, I decided to tap
        into my creative side and follow in my parents' entrepreneurial
        footsteps by launching a graphic design company. I learned so much
        during that time, but everything I created was static. Craving to
        expand my technical capabilities coupled with a desire to build dynamic
        apps and a love for languages, I became a software engineer. Presently,
        I'm taking a few weeks off to recharge before starting my new role as
        a Software Engineer at Cisco Meraki on the Dashboard Features team!
      </Description>
      <NavLink to='/contact'>
        <Button text='Say hi' />
      </NavLink>
    </Me>
  )
}
