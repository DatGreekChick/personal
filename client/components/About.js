import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '~/client/components/Button'

import { aboutHeader, aboutText1, aboutText2 } from '~/content/about'

import { About, AboutHeader, AboutText } from '~/client/styles/about'

export default () => (
  <About>
    <AboutHeader>{aboutHeader}</AboutHeader>
    <AboutText>{aboutText1}</AboutText>
    <AboutText>{aboutText2}</AboutText>
    <NavLink exact to='/work'>
      <Button text='See my work' />
    </NavLink>
  </About>
)
