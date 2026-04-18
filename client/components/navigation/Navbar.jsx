import { ErrorBoundary } from 'react-error-boundary'
import { NavLink, Outlet } from 'react-router'

import { Hamburger } from './Hamburger'
import styles from './Navbar.module.css'
import { ErrorFallback } from '../fallbacks'

export const Navbar = () => (
  <>
    <nav role='navigation' className={styles.nav}>
      <NavLink to='/' style={{ zIndex: 4, paddingLeft: '5px' }}>
        <picture>
          <source srcSet='/assets/img/CreamLogo.webp' type='image/webp' />
          <img
            src='/assets/img/CreamLogo.png'
            alt='eak-logo-cream'
            fetchPriority='high'
            className={styles.logo}
          />
        </picture>
      </NavLink>
      <Hamburger />
    </nav>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Outlet />
    </ErrorBoundary>
  </>
)
