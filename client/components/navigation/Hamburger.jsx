import { useState } from 'react'

import { NavLink } from 'react-router'
import { Sling } from 'hamburger-react'

import styles from './Hamburger.module.css'
import { usePrefetch } from '../../../api/firebase'

const LINKS = ['Home', 'About', 'Work', 'Articles', 'Uses', 'Contact']

export const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  const prefetchProjects = usePrefetch('fetchProjects')
  const prefetchArticles = usePrefetch('fetchArticles')
  const prefetchUses = usePrefetch('fetchUses')

  const prefetchHandlers = {
    Work: () => prefetchProjects(),
    Articles: () => prefetchArticles(),
    Uses: () => prefetchUses(),
  }

  return (
    <>
      <Sling
        direction='left'
        toggled={open}
        toggle={toggleMenu}
        label='Toggle menu'
        isOpen={open}
      />
      {open && (
        <ul className={styles.menuList}>
          {LINKS.map(link => (
            <li key={link} style={{ margin: 0, padding: '1%' }}>
              <NavLink
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                onClick={toggleMenu}
                onMouseEnter={prefetchHandlers[link]}
                className={({ isActive }) =>
                  [styles.navLink, isActive && styles.navLinkActive]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
