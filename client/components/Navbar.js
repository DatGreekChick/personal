import React from 'react'
import { NavLink } from 'react-router-dom'

import '~/public/assets/styles/navbar.css'

const logo = '/assets/img/ea-logo-cream.png'
    , nav = ['About', 'Work', 'Articles', 'Contact']

export default () =>
  <nav role='navigation' className='nav-bar'>
    <NavLink to='/'>
      <img className='logo' src={logo} alt='ea-logo-cream'/>
    </NavLink>
    {
      nav.map(link =>
        <NavLink key={link} to={`/${link.toLowerCase()}`}
                 className='underline'>{`${link}`}
        </NavLink>
      )
    }
  </nav>