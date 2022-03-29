import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Logo, StyledNavLink } from '~/client/styles/nav'

export default () => (
  <Nav role='navigation'>
    <NavLink to='/'>
      <Logo src='/assets/img/CreamLogo.png' alt='eak-logo-cream' />
    </NavLink>
    {['About', 'Work', 'Articles', 'Contact'].map(link => (
      <StyledNavLink key={link} to={`/${link.toLowerCase()}`}>
        {link}
      </StyledNavLink>
    ))}
  </Nav>
)
