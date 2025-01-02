import { ErrorBoundary } from 'react-error-boundary'
import { NavLink, Outlet } from 'react-router'
import { styled } from 'styled-components'

import { ErrorFallback, Hamburger } from '~/client/components'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  font-size: 23px;
  font-weight: 800;
  color: ghostwhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2%;
  padding: 1rem 0;
  vertical-align: text-top;
  background-color: rgba(0, 0, 0, 1);
  z-index: 3;
`

const Logo = styled.img`
  display: flex;
  align-items: center;
  min-width: 15%;
  max-height: 30px;
`

export const Navbar = () => (
  <>
    <Nav role='navigation'>
      <NavLink to='/' style={{ zIndex: 4, paddingLeft: '5px' }}>
        <Logo src='/assets/img/CreamLogo.png' alt='eak-logo-cream' />
      </NavLink>
      <Hamburger />
    </Nav>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Outlet />
    </ErrorBoundary>
  </>
)
