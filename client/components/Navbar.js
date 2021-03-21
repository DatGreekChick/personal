import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Logo, StyledNavLink } from '~/client/styles/nav'

const logo = '/assets/img/ea-logo-cream.png'
const links = ['About', 'Work', 'Articles', 'Contact']

export default () => (
  <Nav role='navigation'>
    <NavLink to='/'>
      <Logo src={logo} alt='ea-logo-cream' />
    </NavLink>
    {links.map(link => (
      <StyledNavLink key={link} to={`/${link.toLowerCase()}`}>
        {link}
      </StyledNavLink>
    ))}
  </Nav>
)
