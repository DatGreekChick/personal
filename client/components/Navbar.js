import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import Hamburger from '~/client/components/Hamburger'

import { Nav, Logo } from '~/client/styles/nav'

const Navbar = () => (
  <>
    <Nav role='navigation'>
      <NavLink to='/'>
        <Logo src='/assets/img/CreamLogo.png' alt='eak-logo-cream' />
      </NavLink>
      <Hamburger />
    </Nav>
    <Outlet />
  </>
)

export default Navbar
