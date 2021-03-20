import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '~/client/components/Button'

import { aboutHeader, aboutText1, aboutText2 } from '~/content/about'

import '~/public/assets/styles/about.css'

export default () => (
  <div className='about'>
    <p className='about-header'>{aboutHeader}</p>
    <p className='about-text'>{aboutText1}</p>
    <p className='about-text'>{aboutText2}</p>
    <NavLink exact to='/work'>
      <Button text='See my work' />
    </NavLink>
  </div>
)
