import React from 'react'
import { styled } from 'styled-components'
import { NavLink, Outlet } from 'react-router-dom'

import Hamburger from '~/client/components/Hamburger'

const Nav = styled.nav`
  top: 0;
  font-size: 23px;
  font-weight: 800;
  color: ghostwhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2%;
  padding: 1rem;
  vertical-align: text-top;
`

const Logo = styled.img`
  display: flex;
  align-items: center;
  min-width: 15%;
  max-height: 30px;
`

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
