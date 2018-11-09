import React from 'react'
import { NavLink } from 'react-router-dom'

import '~/public/assets/styles/navbar.css'

const logo = '/assets/img/ea-logo-cream.png'
    , nav = ['About', 'Work', 'Articles', 'Contact']

export default () =>
  <nav role='navigation' className='nav-bar'>
    {
      nav.map(link =>
        link === '/'
          ? <NavLink key={link} to={link}>
             <img className='logo' src={logo} alt='ea-logo-cream'/>
            </NavLink>
          : <NavLink key={link} to={`/${link.toLowerCase()}`}
                     className='underline'>
             {`${link}`}
            </NavLink>
      )
    }
  </nav>